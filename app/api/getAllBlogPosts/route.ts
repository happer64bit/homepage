import prisma from "@/prisma";

export async function GET(request: Request) {
    const post = await prisma.post.findMany({
        select: {
            id: true,
            postId: true,
            contents: false,
            createdAt: true,
            thumbnail: true,
            title: true
        }
    })

    return new Response(JSON.stringify(post), {
        headers: {
            "Content-Type": "application/json"
        }
    })
}