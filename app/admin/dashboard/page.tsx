import AdminBlogCard from "@/components/admin/AdminBlogCard";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import prisma from "@/lib/prisma";
import { Pencil2Icon, EyeOpenIcon, TrashIcon } from '@radix-ui/react-icons'
import Link from "next/link";

const articles = async () => {
    return await prisma.articles.findMany({
        orderBy: {
            createdAt: "desc"
        }
    })
}

export default async function () {
    const articlesList = await articles()

    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">Blog</h1>
            <div className="flex flex-warp my-10 gap-4">
                {articlesList.map((event) => (
                    <AdminBlogCard event={event} key={event.id} />
                ))}
            </div>
        </div>
    )
}