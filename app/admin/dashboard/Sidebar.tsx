"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function Sidebar() {
    const pathname = usePathname()
    return (
        <aside className={"sticky top-0 left-0"}>
            <div className="space-y-4 py-4">
                <div className="px-3 py-2">
                    <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                        Control
                    </h2>
                    <div className="space-y-1">
                        <Link href={"/admin/dashboard"}>
                            <Button variant="ghost" className={`w-full justify-start ${pathname=="/admin/dashboard" ? "text-black dark:text-white font-bold" : "text-black/80 dark:text-white/80"}`}>
                                Blog
                            </Button>
                        </Link>
                        <Link href={"/admin/dashboard/events"}>
                            <Button variant="ghost" className={`w-full justify-start ${pathname=="/admin/dashboard/events" ? "text-black dark:text-white font-bold" : "text-black/80 dark:text-white/80"}`}>
                                Event
                            </Button>
                        </Link>
                        <Link href={"/admin/dashboard/contacts"}>
                            <Button variant="ghost" className={`w-full justify-start ${pathname=="/admin/dashboard/contacts" ? "text-black dark:text-white font-bold" : "text-black/80 dark:text-white/80"}`}>
                                Contacts
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    )
}