import prisma from "@/prisma";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }: { params: { id: string } }) {
    const getHead = async () => {
        "use server"
        try {
            const posts: any = await prisma.contents.findUnique({
                where: {
                    pathname: params.id
                }
            });
            prisma.$disconnect();
            console.log(posts)
            // Return the response
            return {
                title: posts.title
            };
        } catch (error) {
            return {
                title: "Page Not Found"
            }
        }
    }

    return { ...await getHead().catch((error) => {
        notFound()
    }) }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}