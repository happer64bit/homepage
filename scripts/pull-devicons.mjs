import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, "..");

const DEFAULT_CONFIG = {
  outputDir: path.join(projectRoot, "public", "icons", "devicon"),
  source: "node_modules",
  items: [
    { name: "typescript" },
    { name: "javascript" },
    { name: "bun" },
    { name: "docker" },
    { name: "figma" },
    { name: "python" },
    { name: "vuejs" },
    { name: "react" },
    { name: "svelte" },
    { name: "nextjs" },
    { name: "nuxtjs" },
    { name: "tailwindcss" },
    { name: "express" },
    { name: "fastify" },
  ],
  variants: ["original", "plain", "line", "original-wordmark", "plain-wordmark", "line-wordmark"],
};

class SourceStrategy {
  async getIconPath() {
    throw new Error("Not implemented");
  }
}

class NodeModulesSource extends SourceStrategy {
  constructor(root) {
    super();
    this.root = root;
    this.base = path.join(root, "node_modules", "devicon", "icons");
  }
  async getIconPath(name, variant) {
    const candidate = path.join(this.base, name, `${name}-${variant}.svg`);
    try {
      await fs.access(candidate);
      return candidate;
    } catch {
      return null;
    }
  }
}

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function copyIconFile(srcPath, destDir, name, variant) {
  const outDir = path.join(destDir, name);
  await ensureDir(outDir);
  const destPath = path.join(outDir, `${name}-${variant}.svg`);
  await fs.copyFile(srcPath, destPath);
  return destPath;
}

async function loadConfig() {
  const arg = process.argv[2];
  if (!arg) return DEFAULT_CONFIG;
  const cfgPath = path.isAbsolute(arg) ? arg : path.join(projectRoot, arg);
  const raw = await fs.readFile(cfgPath, "utf-8");
  const userCfg = JSON.parse(raw);
  return {
    ...DEFAULT_CONFIG,
    ...userCfg,
    items: userCfg.items ?? DEFAULT_CONFIG.items,
    variants: userCfg.variants ?? DEFAULT_CONFIG.variants,
    outputDir: userCfg.outputDir
      ? path.isAbsolute(userCfg.outputDir)
        ? userCfg.outputDir
        : path.join(projectRoot, userCfg.outputDir)
      : DEFAULT_CONFIG.outputDir,
  };
}

async function main() {
  const config = await loadConfig();
  const strategy =
    config.source === "node_modules"
      ? new NodeModulesSource(projectRoot)
      : (() => {
          throw new Error(`Unsupported source: ${config.source}`);
        })();

  await ensureDir(config.outputDir);

  const results = [];
  for (const item of config.items) {
    const name = item.name;
    for (const variant of config.variants) {
      const src = await strategy.getIconPath(name, variant);
      if (!src) {
        results.push({ name, variant, status: "missing" });
        continue;
      }
      try {
        const dest = await copyIconFile(src, config.outputDir, name, variant);
        results.push({ name, variant, status: "copied", dest });
      } catch (err) {
        results.push({ name, variant, status: "error", error: String(err) });
      }
    }
  }

  const copied = results.filter((r) => r.status === "copied").length;
  const missing = results.filter((r) => r.status === "missing").length;
  const errors = results.filter((r) => r.status === "error").length;

  console.log(
    `Devicon SVG pull complete: copied=${copied}, missing=${missing}, errors=${errors}`
  );
  if (missing) {
    const miss = results.filter((r) => r.status === "missing");
    console.log(
      "Missing:",
      miss.map((m) => `${m.name}:${m.variant}`).join(", ")
    );
  }
  if (errors) {
    const errs = results.filter((r) => r.status === "error");
    console.error(
      "Errors:",
      errs.map((e) => `${e.name}:${e.variant} -> ${e.error}`).join("\n")
    );
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
