import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import PopupLayout from '@/components/PopupLayout';
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import rehypeStringify from 'rehype-stringify'
import rehypePrettyCode from 'rehype-pretty-code';
import React from 'react';

async function useArticle(slug: any) {
    try {
        const article = await prisma.articles.findUniqueOrThrow({
            where: {
                pathname: slug
            }
        })

        return article
    } catch {
        notFound()
    } finally {
        await prisma.$disconnect();
    }
}

export default async function Article({ params }: any) {
    const article = await useArticle(params.slug)

    return (
        <div>
            <div className="max-w-[100dvh] mx-auto">
                <PopupLayout>
                    <div>
                        <Image width={1000} height={1000} src={article.thumbnail} alt={article.title} className='my-5 rounded-lg w-full' />
                    </div>
                    <div className="prose prose-h1:text-2xl dark:prose-invert my-4">
                        <MDXRemote source={article.contents ?? "This Article has no contents"} components={{
                            img: (props) => (
                                <Image
                                    loading='lazy'
                                    objectFit='cover'
                                    height={1000}
                                    width={1000}
                                    src={props.src as string}
                                    alt={props.alt as string}
                                    className='w-full h-auto'
                                />
                            ),
                        }} options={{
                            mdxOptions: {
                                rehypePlugins: [
                                    // @ts-ignore
                                    rehypeStringify,
                                    // @ts-ignore
                                    rehypePrettyCode,
                                ],
                                format: 'mdx'
                            },
                        }} />
                    </div>
                </PopupLayout>
            </div>
        </div>
    );
}

export async function generateStaticParams() {
    return (await prisma.articles.findMany({})).map((event) => event.pathname)
}