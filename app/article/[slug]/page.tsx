import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import PopupLayout from '@/components/PopupLayout';
import { MDXRemote } from 'next-mdx-remote/rsc'
import Image from 'next/image';
import rehypeStringify from 'rehype-stringify'
import remarkGfm from 'remark-gfm'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import rehypePrettyCode from 'rehype-pretty-code';

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
                        <img src={article.thumbnail} alt={article.title} className='my-5 rounded-lg w-full' />
                    </div>
                    <div className="prose prose-h1:text-2xl dark:prose-invert my-4">
                        <MDXRemote source={article.contents} components={{
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
                            p: (props) => <>{props.children}</>
                        }} options={{
                            mdxOptions: {
                                rehypePlugins: [
                                    {
                                        plugins: [rehypeStringify, rehypePrettyCode],
                                        settings: {
                                            theme: "github-dark"
                                        }
                                    }
                                ],
                                format: 'mdx'
                            }
                        }} />
                    </div>
                </PopupLayout>
            </div>
        </div>
    );
}
