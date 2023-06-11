import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export async function GET(request: Request) {
    /**
     * use params limit: number and page: number
     * The function receives a GET request object as a parameter
     */

    // Extract the query parameters from the request
    const { searchParams } = new URL(request.url);

    const postID = String(searchParams.get("postID"))
    
    try {
        // Use prisma.posts to fetch posts based on the limit and page parameters
        const posts = await prisma.post.findMany({
            where: {
                id: postID
            }
        });

        // Create a new Response object with the fetched posts as the body
        const response = new Response(JSON.stringify(posts), {
            headers: {
                "Content-Type": "application/json",
            },
        });

        // Return the response
        return response;
    } catch (error) {
        // Return an error response if there was an error fetching the posts
        return new Response(JSON.stringify({ error: "Internal server error" }), {
            status: 500,
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
