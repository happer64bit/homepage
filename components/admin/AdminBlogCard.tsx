"use client"
import { EyeOpenIcon, Pencil2Icon, TrashIcon } from "@radix-ui/react-icons"
import { Button } from "../ui/button"
import { Card, CardDescription, CardFooter, CardHeader } from "../ui/card"
import Link from "next/link"
import { toast } from "../ui/use-toast"
import Image from "next/image"

export default function AdminBlogCard({ event } : any) {
    return (
        <Card className="w-[21rem]">
            <CardHeader>
                <Image width={1000} height={1000}  src={event.thumbnail} className="w-[20rem] rounded" alt={event.title as string} />
            </CardHeader>
            <CardDescription className="px-6 text-lg font-bold">
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
                    <Button variant={"ghost"} className="w-fit" onClick={() => {
                        fetch("/admin/api/delete", {
                            method: "POST",
                            body: JSON.stringify({
                                id: event.id
                            })
                        }).then(() => toast({ title: "Deleted Successfully" })).catch(() => {
                            toast({ title: "Failed to delete", variant: "destructive" })
                        })
                    }}>
                        <TrashIcon color="red" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}