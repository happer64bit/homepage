import prisma from "@/lib/prisma";
import toMarkdown from "@/lib/toMarkdown";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const limit = Number(request.nextUrl.searchParams.get("limit")) || 10;
    const page = Number(request.nextUrl.searchParams.get("page")) || 1;

    try {
        const posts = await prisma.articles.findMany({
            take: limit,
            skip: (page - 1) * limit,
            select: {
                contents: false,
                createdAt: true,
                pathname: true,
                id: true,
                thumbnail: true,
                shortContents: true,
                title: true,
            },
            orderBy: {
                createdAt: "desc",
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