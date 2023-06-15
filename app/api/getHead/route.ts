import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);

    const postID = String(searchParams.get("postID"))
    
    try {
        const posts = await prisma.post.findMany({
            where: {
                id: postID
            }
        });
        prisma.$disconnect()
        const response = new Response(JSON.stringify({ head: { title: posts[0].title }}), {
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Return the response
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