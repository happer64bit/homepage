import Link from "next/link";

export default function PageNotFoundPage() {
    return (
        <div>
            <div className="flex items-center justify-center h-[70vh]">
                <div className="text-center">
                    <h1 className="text-2xl">404 Page Not Found</h1>
                    <Link href={"/"} className="text-blue-500 underline">Go Back to /</Link>
                </div>
            </div>
        </div>
    )
}