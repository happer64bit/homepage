import prisma from "@/lib/prisma";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata({ params } : any): Promise<Metadata> {
    const article = await prisma.articles.findUnique({
        where: {
            pathname: params.slug
        },
        select: {
            contents: false,
            createdAt: false,
            id: false,
            pathname: false,
            shortContents: true,
            thumbnail: true,
            title: true,
            updatedAt: false
        }
    })

    return {
        title: article?.title,
        description: article?.shortContents,
        twitter: {
            images: article?.thumbnail
        },
        openGraph: {
            albums: article?.thumbnail,
            images: article?.thumbnail,
        },
        metadataBase: new URL(`https://${process.env.VERCEL_URL}` || "http://localhost:3000")
    }
}
export default function ArticleLayout({ children } : { children: React.ReactNode }) {
    return (
        <div className="my-20">
            {children}
        </div>
    )
}