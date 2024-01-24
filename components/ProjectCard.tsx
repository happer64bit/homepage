import Image from "next/image"
import Link from "next/link"

interface Props {
    name: string,
    version: string,
    website: string,
    image: string,
    description: string,
    technology: string[],
    tags: string[]
}

export default function ProjectCard(props: Props) {
    return (
        <Link href={props.website} className="p-3" passHref>
            <div className="my-2">
                <Image src={props.image} width={500} height={300} alt={props.name} className="rounded"/>
            </div>
            <div className="my-2">
                <h2 className="text-2xl flex items-center gap-2">{props.name} - <span className="hover:underline text-black/50 dark:text-white/50 text-sm font-mono">{props.website}</span></h2>
                <div className="flex flex-warp gap-2 mt-2">
                    {props.tags.map((event) => (    
                        <div className="border-2 px-2 rounded-lg" key={event}>
                            # {event}
                        </div>
                    ))}
                </div>
            </div>
        </Link>
    )
}