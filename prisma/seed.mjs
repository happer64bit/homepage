import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
const prisma = new PrismaClient()

async function main() {
    const post = await prisma.articles.create({
        data: {
            title: "What is Server-Side Rendering?",
            pathname: "what-is-server-side-rendering",
            thumbnail: "https://i.ibb.co/VmY3Q2t/What-is-Server-Side-Rendering.png",
            shortContents: "What's SSR? It's a web magic where the server does the work, sending complete webpages for a faster, smoother experience.",
            contents: readFileSync("./contents/what-is-ssr/article.md").toString("utf-8")
        }
    })
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
