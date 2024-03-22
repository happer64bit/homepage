import { PrismaClient } from '@prisma/client'
import { readFileSync } from 'fs'
const prisma = new PrismaClient()

async function main() {
    const post = await prisma.articles.create({
        data: {
            title: "Ai and Machine Learning Keywords Explained            ",
            pathname: "ai-and-machine-learning-keywords-explained",
            thumbnail: "https://imgdb.net/storage/uploads/f6c89b7bed337a3dfe7ad73d59152bfdeb197d24efcc828d9331a53df37af803.png",
            shortContents: "Basic And Fundamental Ai and Machine Learning Development used Keywords explained",
            contents: readFileSync("./contents/ai-and-machine-learning-keywords-explained/content.md").toString("utf-8")
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
