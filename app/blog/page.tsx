"use client"
import Paginate from '@/components/Paginate';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type ArticleType = {
    pathname: string,
    id: number,
    title: string,
    shortContent: string
    thumbnail: string,
    contents: string,
    createdAt: Date,
}

export default function () {
    const [articles, setArticles] = useState<any[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(1);

    const fetchArticles = async (page: number) => {
        const res = await fetch(`/api/blog/getAllArticles?page=${page}`);

        if (res.ok) {
            const data = await res.json();
            setArticles(data);
            setCurrentPage(page);
            setIsLoading(false);
        }

        // Fetch the total number of pages separately
        const ttPagesRes = await fetch(`/api/blog/getArticlesCount`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (ttPagesRes.ok) {
            const ttPagesData = await ttPagesRes.json();
            const totalPages = ttPagesData.length; // Extract the 'length' property
            setTotalPages(totalPages);
        }
    };


    useEffect(() => {
        fetchArticles(currentPage);
        console.log(articles)
    }, [currentPage]);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <main>
            <div className="flex justify-center my-10">
                <div className="px-5">
                    <h1 className="text-2xl font-bold">Blog</h1>
                    <div className="my-3">
                        <div className="container">
                            {articles.map((event) => (
                                <React.Fragment key={event.pathname}>
                                    <Link href={"/article/" + event.pathname}>
                                        <div className="p-4 rounded-md flex gap-6 transform duration-75 hover:bg-accent-foreground/[0.025] my-5">
                                            <div>
                                                <img src={event.thumbnail} className='w-[15rem] bg-contain bg-no-repeat bg-center h-[8.4375rem] rounded-md' />
                                            </div>
                                            <div className='flex items-center'>
                                                <div>
                                                    <h2 className="text-md lg:text-lg font-bold">{event.title}</h2>
                                                    <p className="text-sm">{event.shortContents}</p>
                                                    <p className="text-sm">{new Date(event.createdAt).toDateString()}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </React.Fragment>
                            ))}
                        </div>
                        <div className="flex justify-center my-10">
                            <Paginate currentPage={1} maxPages={totalPages} handleRoute={(page) => { console.log(page) }} />
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
