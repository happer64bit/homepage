import prisma from "@/lib/prisma"

export async function GET() {
    const count = await prisma.articles.count();

    return new Response(JSON.stringify({
        length: count
    }))
}