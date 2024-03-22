import prisma from "@/lib/prisma";
import Link from "next/link";

async function getEvent(): Promise<any> {
    "use server"
    const currentDate = new Date();

    const event = await prisma.events.findFirst({
        orderBy: {
            createdAt: "desc"
        }
    });

    await prisma.$disconnect()
    
    const isEventActive = event && event.startedDate <= currentDate && currentDate <= event.endDate;
    
    return {
        ...event,
        isEventActive
    };
}

export default async function EventAnnouncement() {
    const event: any = await getEvent()

    return event && event.isEventActive && (
        <Link href={event.redirectLink}>
            <div className="relative isolate flex items-center gap-x-6 overflow-hidden dark:text-white dark:bg-transparent px-6 py-2 sm:px-3.5 justify-center hover:underline">
                <div className="text-center">
                    <p className="text-sm leading-6">
                        <strong className="font-semibold">{event.title}</strong>
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        {event.description}
                    </p>
                </div>
            </div>
        </Link>
    );
}
