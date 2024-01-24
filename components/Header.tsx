import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import AnnouncementBar from "./AnnouncementBar";

export default function Header() {
    return (
        <>
            <AnnouncementBar />
            <nav className="supports-backdrop-blur:bg-background/60 top-0 z-50 w-full border-b bg-background/95 backdrop-blur sticky">
                <div className="container h-12 flex items-center justify-between">
                    <div className="flex items-center">
                        <Link href={"/"} className="px-4">
                            <h2 className="text-lg">HAPPER</h2>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <Link href="/projects">
                            <Button variant={"ghost"}>Projects</Button>
                        </Link>
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