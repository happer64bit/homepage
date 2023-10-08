"use client"
import { useEffect, useState } from "react";

interface EventData {
    isEventActive: boolean;
    event: {
        id: number;
        title: string;
        description: string;
        redirectLink: string;
        startedDate: Date;
        endDate: Date;
        enabled: boolean;
        createdAt: Date;
    };
}

export default function EventAnnouncement() {
    const [event, setEvent] = useState<EventData>({
        isEventActive: false, // Initialize isEventActive to false
        event: {
            id: 0,
            title: "",
            description: "",
            redirectLink: "",
            startedDate: new Date(),
            endDate: new Date(),
            enabled: false,
            createdAt: new Date(),
        },
    });

    useEffect(() => {
        async function fetchLatest() {
            try {
                const res = await fetch("/api/events/getLatestEvent");
                const data = await res.json();
                setEvent(data);
            } catch (error) {
                console.error("Error fetching event data:", error);
                setEvent({ ...event, isEventActive: false });
            }
        }
        fetchLatest();
    }, []); // Add an empty dependency array to run the effect only once

    // Check if event exists before accessing isEventActive
    return event && event.isEventActive && (
        <div className="relative isolate flex items-center gap-x-6 overflow-hidden dark:text-white dark:bg-transparent px-6 py-2 sm:px-3.5 justify-center">
            <div className="text-center">
                <p className="text-sm leading-6">
                    <strong className="font-semibold">{event.event.title}</strong>
                    <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                        <circle cx={1} cy={1} r={1} />
                    </svg>
                    {event.event.description}
                </p>
            </div>
        </div>
    );
}
