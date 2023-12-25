"use client"
import Paginate from '@/components/Paginate';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';

function ListItem(event: any) {
    return (
        <React.Fragment>
            <Link href={`/article/${event.pathname}`} passHref>
                <div className="p-4 rounded-md flex lg:flex-row flex-col gap-6 transform duration-75 hover:bg-accent-foreground/[0.025] my-5">
                    <div>
                        <Image
                            src={event.thumbnail}
                            width={1000}
                            height={1000}
                            className="w-full lg:w-[15rem] bg-contain bg-no-repeat bg-center lg:h-[8.4375rem] rounded-md"
                            alt={event.title}
                        />
                    </div>
                    <div className="flex items-center">
                        <div>
                            <h2 className="lg:text-lg font-bold">{event.title}</h2>
                            <p className="text-sm mt-2 lg:mt-0">{event.shortContents}</p>
                            <p className="text-sm">{new Date(event.createdAt).toLocaleDateString()}</p>
                        </div>
                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
}

export default function BlogPage() {
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
    }, [articles, currentPage]);

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

    const ListItemComponent = useMemo(() => ListItem, [])

    return (
        <main>
            <div className="flex justify-center my-10">
                <div>
                    <div className="my-3">
                        <div className="container">
                            <h1 className="text-2xl font-bold">Blog</h1>
                            {articles.map((event) => (
                                <ListItemComponent key={event.pathname} {...event} />
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
