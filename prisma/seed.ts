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
        id: "introducing-ginz-01",
        postId: "introducing-ginz-01",
        title: "Introducing Ginz: Simplify Cloning Multiple GitHub Repositories",
        contents: contents,
        thumbnail: "https://raw.githubusercontent.com/happer64bit/happer64bit/main/blog-assets/images/ginz.webp"
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
