import { allPosts } from "content-collections";
import Link from "next/link";

export default function PostsPage() {
    return (
        <main className="container">
            <h1 className="text-3xl font-bold mb-4">Posts</h1>
            <div className="grid gap-4">
                {allPosts.map((posts) => (
                    <Link href={"/posts/" + posts._meta.path} key={posts._meta.path} className="p-6 rounded-3xl flex flex-col justify-between min-h-[170px] bg-[#E8E8E8]">
                        <div>
                            <h3 className="text-xl">{posts.title}</h3>
                            <p className="uppercase font-sans text-sm">{posts.publishedDate.toLocaleString()}</p>
                        </div>
                        <p>{posts.summary}</p>
                        <p className="text-blue-500 flex items-center gap-2">READ ARTICLE</p>
                    </Link>
                ))}
            </div>
        </main>
    );
}