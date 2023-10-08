import prisma from "@/lib/prisma"

export async function GET() {
    const perPage = 10; // Number of articles per "length" unit

    const articles = await prisma.articles.findMany();

    const length = Math.ceil(articles.length / perPage);

    return new Response(JSON.stringify({
        length,
    }));
}
