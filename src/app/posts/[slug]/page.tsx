import { postsDictionary } from "@/lib/posts";
import { Post } from "content-collections"
import { notFound } from "next/navigation";
import 'highlight.js/styles/github.css';

export async function generateStaticParams() {
    return Object.keys(postsDictionary).map((slug) => ({
        slug,
    }));
}

async function fetchPost(slug: string): Promise<Post> {
    "use cache"

    const post = postsDictionary[slug];

    if (!post) {
        throw notFound();
    }

    return post;
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    const post = await fetchPost(slug);

    return {
        title: post.title,
        description: post.summary,
        openGraph: {
            title: post.title,
            description: post.summary,
            url: `https://wintkhantlin.vercel.app/posts/${slug}`,
        },
    }
}


export default async function ViewPostPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await fetchPost(slug);

    return (
        <>
            <main className="max-w-4xl prose mx-auto my-14 px-4 prose-pre:bg-transparent prose-code:border prose-code:border-gray-200 prose-code:rounded-lg prose-pre:p-0">
                <article dangerouslySetInnerHTML={{ __html: post.html }}></article>
            </main>
        </>
    )
}