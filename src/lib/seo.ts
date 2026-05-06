export const siteConfig = {
  name: "Wint Khant Lin",
  siteName: "Wint Khant Lin",
  handle: "Happer",
  author: "Wint Khant Lin",
  role: "Software engineer",
  locale: "en_US",
  defaultTitle: "Wint Khant Lin | Software Engineer Portfolio",
  defaultDescription:
    "Explore Wint Khant Lin's software engineer portfolio, backend projects, systems thinking, web experiments, and programming notes from Myanmar.",
  defaultKeywords: [
    "Wint Khant Lin",
    "Happer",
    "software engineer portfolio",
    "backend engineering",
    "systems programming",
    "web development",
    "programming blog",
    "software projects",
    "Myanmar developer",
  ],
  social: {
    github: "https://github.com/wintkhantlin",
    linkedin: "https://www.linkedin.com/in/wintkhantlin/",
    email: "mailto:hello@wintkhantlin.com",
  },
};

export function dedupeKeywords(values: Array<string | undefined | null>) {
  return [...new Set(values.filter(Boolean).map((value) => value!.trim()))];
}

export function absoluteUrl(path: string, site?: URL) {
  return site ? new URL(path, site).toString() : path;
}

export function createPersonSchema(site?: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    alternateName: siteConfig.handle,
    url: absoluteUrl("/", site),
    image: absoluteUrl("/favicon.png", site),
    jobTitle: siteConfig.role,
    knowsAbout: [
      "Backend engineering",
      "Systems programming",
      "Web development",
      "Software architecture",
    ],
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
  };
}

export function createWebsiteSchema(site?: URL) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.siteName,
    url: absoluteUrl("/", site),
    description: siteConfig.defaultDescription,
    inLanguage: "en",
    author: {
      "@type": "Person",
      name: siteConfig.author,
    },
  };
}

export function createBreadcrumbSchema(
  items: Array<{ name: string; path: string }>,
  site?: URL,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path, site),
    })),
  };
}
