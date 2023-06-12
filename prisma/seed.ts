const { PrismaClient } = require("@prisma/client");
const fs = require("fs");

const prisma = new PrismaClient();

async function main() {
  try {
    const filePath = ".md.md"; // Replace with the actual file path

    // Read the file contents
    const contents = fs.readFileSync(filePath, "utf-8");

    const post = await prisma.post.create({
      data: {
        title: "Introducing Myself".toUpperCase(),
        contents: contents,
        thumbnail: "https://github.com/happer64bit/happer64bit/blob/main/blog-assets/images/who-is-wintkhantlin-1.png?raw=true"
      }
    });

    console.log("Post created:", post);
  } catch (error) {
    console.error("Error creating post:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
