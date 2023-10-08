import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { id } = await request.json();

        // Fetch the event by id
        const eventToToggle = await prisma.events.findUnique({
            where: {
                id: id,
            },
        });

        // If the event exists, toggle its 'enabled' status
        if (eventToToggle) {
            // Check if the event is already enabled
            if (eventToToggle.enabled) {
                // The event is already enabled, so no need to toggle it again
                return new Response(JSON.stringify(eventToToggle), { status: 200 });
            } else {
                // Disable any other enabled events
                await prisma.events.updateMany({
                    where: {
                        enabled: true,
                    },
                    data: {
                        enabled: false,
                    },
                });

                const currentEvent = await prisma.events.findFirst({
                    where: {
                        id: id
                    }
                })

                const updatedEvent = await prisma.events.update({
                    where: {
                        id: id,
                    },
                    data: {
                        enabled: !currentEvent?.enabled,
                    },
                });

                console.log(updatedEvent)

                // Return the updated event
                return new Response(JSON.stringify(updatedEvent), { status: 200 });
            }
        } else {
            // Event not found
            return new Response(JSON.stringify({ message: "Event not found" }), { status: 404 });
        }
    } catch (error) {
        console.error("Error toggling event status:", error);

        // Return an error response
        return new Response(JSON.stringify({ message: "Error toggling event status" }), { status: 500 });
    }
}
