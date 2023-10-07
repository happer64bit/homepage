import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Pencil2Icon, EyeOpenIcon, TrashIcon } from '@radix-ui/react-icons'

export default function () {
    return (
        <div className="mt-10">
            <h1 className="text-2xl font-bold">Blog</h1>
            <div className="flex flex-warp my-10">
                <Card>
                    <CardHeader>
                        <img src="https://github.com/happer64bit/happer64bit/blob/main/blog-assets/images/who-is-wintkhantlin-1.png?raw=true" className="w-96"/>
                    </CardHeader>
                    <CardDescription className="px-6 text-xl font-semibold">
                        Who's Wint Khant Lin?
                    </CardDescription>
                    <CardFooter>
                        <div className="flex items-center gap-2">
                            <Button variant={"ghost"} className="w-fit">
                                <Pencil2Icon />
                            </Button>
                            <Button variant={"ghost"} className="w-fit">
                                <EyeOpenIcon />
                            </Button>
                            <Button variant={"ghost"} className="w-fit">
                                <TrashIcon color="red"/>
                            </Button>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}