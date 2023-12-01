import prisma from '@/lib/prisma';
import { notFound } from 'next/navigation';
import { motion } from '@/components/motion'
import PopupLayout from '@/components/PopupLayout';
import toMarkdown from '@/lib/toMarkdown';

type ArticleT = {
    id: number;
    pathname: string;
    thumbnail: string;
    title: string;
    contents: string;
    updatedAt: string;
};

async function useArticle(slug: any) {
    try {
        const article = await prisma.articles.findUniqueOrThrow({
            where: {
                pathname: slug
            }
        })

        return { ...article, htmlData: await toMarkdown(article.contents) }
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
            <div className="flex justify-center">
                <PopupLayout>
                    <div>
                        <img src={article.thumbnail} alt={article.title} className='my-5 rounded-lg w-full' />
                    </div>
                    <div className='my-4'>
                        <h1 className="text-3xl font-bold">{article.title}</h1>
                    </div>
                    <div className="prose prose-md dark:prose-invert" dangerouslySetInnerHTML={{
                        __html: article.htmlData
                    }}></div>
                </PopupLayout>
            </div>
        </div>
    );
}
