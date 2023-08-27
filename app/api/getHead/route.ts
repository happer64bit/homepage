import { PrismaClient } from "@prisma/client";
import { NextRequest } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    const pathname = request.nextUrl.searchParams.get("pathname")
    try {
        const posts = await prisma.contents.findMany({
            where: {
                pathname: pathname
            }
        });
        prisma.$disconnect();
        const response = new Response(JSON.stringify({ head: { title: posts[0].title } }));

        // Return the response
        return response;
    } catch (error) {
        return {
            head: {
                title: "Page Not Found"
            }
        }
    }
}
