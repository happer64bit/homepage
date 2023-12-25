import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

export default function CreateArticlePage() {
    async function createArticle(form: FormData) {
        'use server'

        const { title, description, contents, thumbnail, pathname } = {
            title: String(form.get("title")),
            description: String(form.get("description")),
            contents: String(form.get("contents")),
            thumbnail: String(form.get("thumbnail")),
            pathname: String(form.get("pathname"))
        }

        try {
            const res = await prisma.articles.create({
                data: {
                    title,
                    shortContents: description,
                    contents: contents,
                    thumbnail,
                    pathname,
                }
            })

            return redirect(`/article/${res.pathname}`)
        } catch (err) {
            return redirect('/admin/dashboard/create?type=error')
        } finally {
            prisma.$disconnect();
        }
    }

    return (
        <div>
            <form action={createArticle} className="space-y-3">
                <Input placeholder="Article title" name="title" />
                <Input placeholder="URL Path" name="pathname" />
                <Input placeholder="Thumbnail URL" name="thumbnail" />
                <Textarea placeholder="Article description" name="description" rows={3} className="resize-none" />
                <Textarea placeholder="Contents" name="contents" rows={17} className="resize-none font-mono" />
                <Button className="w-full">Create</Button>
            </form>
        </div>
    )
}