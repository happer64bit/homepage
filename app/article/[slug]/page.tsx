"use client"
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { useEffect, useState } from 'react';

type ArticleT = {
    id: number;
    pathname: string;
    thumbnail: string;
    title: string;
    contents: string;
    updatedAt: string;
};

export default function Article({ params }: any) {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [article, setArticle] = useState<ArticleT | null>(null);

    useEffect(() => {
        async function fetchPost(pathname: string) {
            try {
                const res = await fetch(`/api/blog/findByPath?pathname=${pathname}`);
                if (res.ok) {
                    const data = await res.json();
                    setArticle(data);
                } else {
                    notFound()
                }
            } catch (error) {
                console.error('Error fetching data:', error);
                notFound()
            } finally {
                setIsLoading(false);
            }
        }

        fetchPost(params.slug);
    }, [params.slug]);

    return (
        <div>
            {isLoading && (
                <div className="flex items-center justify-center h-[65vh] w-full">
                    <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
                </div>
            )}
            {!isLoading && article && (
                <div className="flex justify-center">
                    <motion.div
                        className='w-[90dvh] px-4'
                        initial={{
                            opacity: 0,
                            marginTop: '20px',
                        }}
                        animate={{
                            opacity: 1,
                            marginTop: '0',
                        }}
                        transition={{
                            type: 'keyframes',
                        }}
                    >
                        <div>
                            <img src={article.thumbnail} alt={article.title} className='my-5 rounded-lg w-full'/>
                        </div>
                        <div className='my-4'>
                            <h1 className="text-3xl font-bold">{article.title}</h1>
                        </div>
                        <div className="prose prose-md dark:prose-invert" dangerouslySetInnerHTML={{
                            __html: article.contents
                        }}></div>
                    </motion.div>
                </div>
            )}
        </div>
    );
}
