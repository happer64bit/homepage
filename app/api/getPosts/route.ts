import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    const limit = Number(searchParams.get("limit")) || 10;
    const page = Number(searchParams.get("page")) || 1;

    try {
        const posts = await prisma.post.findMany({
            take: limit,
            skip: (page - 1) * limit,
            select: {
                contents: false,
                createdAt: true,
                id: true,
                postId: true,
                thumbnail: true,
                title: true,
            },
            orderBy: {
                createdAt: "desc", // Sort by createdAt field in descending order
            },
        });

        prisma.$disconnect();

        const response = new Response(JSON.stringify(posts), {
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    } catch (error) {
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
