"use client"
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import AnnouncementBar from "./AnnouncementBar";
import { usePathname } from "next/navigation";

export default function () {
    const pathname = usePathname()

    return (
        <>
            {pathname == "/" && (
                <AnnouncementBar />
            )}
            <nav className="supports-backdrop-blur:bg-background/60 top-0 z-50 w-full border-b bg-background/95 backdrop-blur sticky">
                <div className="container h-12 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href={"/"} className="px-4">
                            <h2 className="text-lg">HAPPER</h2>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/blog">
                            <Button variant={"ghost"}>Blog</Button>
                        </Link>
                        <ModeToggle />
                    </div>
                </div>
            </nav>
        </>
    )
}