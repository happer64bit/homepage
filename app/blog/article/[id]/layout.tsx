import getHead from "@/lib/getHead"

export async function generateMetadata({ params }: { params: { id: string } }) {
    const datas = await getHead(params.id)

    return {
        title: datas.head.title
    }
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    )
}