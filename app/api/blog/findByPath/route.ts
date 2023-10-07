import prisma from "@/lib/prisma";
import toMarkdown from "@/lib/toMarkdown";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const pathname = request.nextUrl.searchParams.get("pathname")

    if(!pathname) {
        return new Response(JSON.stringify({
            message: "Page not found or invalid",
            type: "error"
        }), {
            status: 404
        })
    }

    try {
        const article = await prisma.articles.findUnique({
            where: {
                pathname: pathname
            },
        })

        if(!article) {
            return new Response(JSON.stringify({
                message: "Page not found",
                type: "error"
            }), {
                status: 404
            })
        }

        const contents = await toMarkdown(article.contents)

        return new Response(JSON.stringify({
            ...article,
            contents
        }))

    } catch (err) {
        console.error(err)
        return new Response(JSON.stringify({
            message: "Internal Server Error",
            type: "error"
        }))
    }
}