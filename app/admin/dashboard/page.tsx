import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
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
                    <Card className="w-[21rem]">
                        <CardHeader>
                            <img src={event.thumbnail} className="w-[20rem] h-[11.25rem]"/>
                        </CardHeader>
                        <CardDescription className="px-6 text-xl font-semibold">
                            {event.title}
                        </CardDescription>
                        <CardFooter>
                            <div className="flex items-center gap-2">
                                <Button variant={"ghost"} className="w-fit">
                                    <Pencil2Icon />
                                </Button>
                                <Link href={`/article/${event.pathname}`}>
                                    <Button variant={"ghost"} className="w-fit">
                                        <EyeOpenIcon />
                                    </Button>
                                </Link>
                                <Button variant={"ghost"} className="w-fit">
                                    <TrashIcon color="red"/>
                                </Button>
                            </div>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </div>
    )
}