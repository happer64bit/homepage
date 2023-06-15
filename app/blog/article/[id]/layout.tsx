import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Loading..."
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    "use client"
    let hostname = "http://happer64bit.vercel.app"

    if(process.env.NODE_ENV == "development") {
        hostname = "http://localhost:3000"
    }
    const res = await fetch(`${hostname}/api/getHead?postID=${params.id}`)
    const datas = await res.json()
    
    return {
        title: datas
    }
}

export default function Layout({ children } : { children: React.ReactNode}) {
    return (
        <>
            {children}
        </>
    )
}