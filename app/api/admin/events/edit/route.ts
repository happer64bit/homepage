import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const {
            id,
            title,
            description,
            redirectLink,
            startedDate,
            endDate,
            enabled,
        } = await request.json();

        // Validation checks (similar to the checks in the "Create Event" route)

        // Fetch the existing event by id
        const existingEvent = await prisma.events.findUnique({
            where: {
                id: id,
            },
        });

        if (!existingEvent) {
            return new Response(JSON.stringify({ message: "Event not found" }), { status: 404 });
        }

        // Update the event in the database with the provided data
        const updatedEvent = await prisma.events.update({
            where: {
                id: id,
            },
            data: {
                title,
                description,
                redirectLink,
                startedDate,
                endDate,
                enabled,
            },
        });

        return new Response(JSON.stringify(updatedEvent), { status: 200 });
    } catch (error) {
        console.error("Error editing event:", error);

        return new Response(JSON.stringify({ message: "Error editing event" }), { status: 500 });
    }
}
