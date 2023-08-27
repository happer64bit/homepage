import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

async function getPost(pathname: string) {
    try {
        const post = await prisma.contents.findUnique({
            where: {
                pathname: pathname
            },
        });

        return post ? {
            id: post.id,
            thumbnail: post.thumbnail,
            category: post.category,
            title: post.title,
            contents: post.contents,
            created_at: post.created_at,
            pathname: post.pathname,
            short_content: post.short_content,
            uuid: post.uuid,
        } : null;
    } catch (error) {
        console.error("Error retrieving post:", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const limit = Number(request.nextUrl.searchParams.get("limit")) || 10;
    const page = Number(request.nextUrl.searchParams.get("page")) || 1;

    try {
        const posts = await prisma.contents.findMany({
            take: limit,
            skip: (page - 1) * limit,
            select: {
                contents: false,
                created_at: true,
                pathname: true,
                id: true,
                thumbnail: true,
                title: true,
            },
            orderBy: {
                created_at: "desc",
            },
        });

        prisma.$disconnect()

        const response = new Response(JSON.stringify(posts, (_, value) => {
            return typeof value === "bigint"
                ? value.toString()
                : value
        }), {
            headers: {
                "Content-Type": "application/json",
            },
        }); 

        return response;
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
