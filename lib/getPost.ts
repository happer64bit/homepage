"use server"
import { PrismaClient, Post as PrismaPost } from "@prisma/client";

const prisma = new PrismaClient();

type PostType = {
    id: string;
    thumbnail: string | null;
    postId: string;
    title: string;
    contents: string | null;
    createdAt: Date;
};

export async function getPost(id: string): Promise<PostType | null> {
    try {
        const post = await prisma.post.findUnique({
            where: {
                id: id,
            },
        });

        if (post) {
            const { id, thumbnail, postId, title, contents, createdAt } = post;
            return { id, thumbnail, postId, title, contents, createdAt };
        }

        return null;
    } catch (error) {
        console.error("Error retrieving post:", error);
        return null;
    } finally {
        await prisma.$disconnect();
    }
}
