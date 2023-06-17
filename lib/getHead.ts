"use server"
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getHead(id: string): Promise<{ head: { title: string } }> {
    try {
        const posts = await prisma.post.findMany({
            where: {
                id: id
            }
        });
        prisma.$disconnect();
        const response = { head: { title: posts[0].title } };

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

export default getHead;
