import { Post } from "content-collections"
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";

interface HomeBlogDisplayProps {
    posts: Post[];
}    

export default function HomeBlogDisplay(props: HomeBlogDisplayProps) {
    return (
        <section>
            <h2 className="text-3xl font-bold mb-4">Latest Blog Posts</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                {props.posts.map((post) => (
                    <Link href={`/posts/${post._meta.path}`} key={post._meta.path} className="p-6 rounded-3xl flex flex-col justify-between min-h-[170px] bg-[#E8E8E8]">
                        <div>
                            <h3 className="text-xl">{post.title}</h3>
                            <p className="uppercase font-sans">{post.publishedDate.toLocaleString()}</p>
                        </div>
                        <p className="text-blue-500 flex items-center gap-2">READ ARTICLE <ArrowUpRightIcon /></p>
                    </Link>
                ))}
            </div>
        </section>
    )
}