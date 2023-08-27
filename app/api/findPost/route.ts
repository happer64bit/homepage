import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: Request) {
    /**
     * use params limit: number and page: number
     * The function receives a GET request object as a parameter
     */

    // Extract the query parameters from the request
    const { searchParams } = new URL(request.url);

    const pathname = String(searchParams.get("pathname"))

    try {
        // Use prisma.posts to fetch posts based on the limit and page parameters
        const posts = await prisma.contents.findMany({
            where: {
                pathname: pathname
            }
        });
        prisma.$disconnect()
        
        if (posts.length > 0) {
            const response = new Response(JSON.stringify({ posts, wasPostFound: true }, ((_, value) => {
                return typeof value === "bigint"
                    ? value.toString()
                    : value
            })), {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            // Return the response
            return response;
        } else {
            const response = new Response(JSON.stringify({ wasPostFound: false }, ((_, value) => {
                return typeof value === "bigint"
                    ? value.toString()
                    : value
            })), {
                headers: {
                    "Content-Type": "application/json",
                },
                status: 404
            });
            // Return the response
            return response;
        }
    } catch (error) {
        console.log(error)
        return new Response(JSON.stringify({ error: "Internal server error" }, ((_, value) => {
            return typeof value === "bigint"
                ? value.toString()
                : value
        })), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}