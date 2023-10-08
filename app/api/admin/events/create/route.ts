import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const {
            title,
            description,
            redirectLink,
            startedDate,
            endDate,
            enabled,
        } = await request.json();

        if (typeof title !== "string" || title.trim() === "") {
            throw new Error("Title is required and must be a non-empty string.");
        }

        if (typeof description !== "string" || description.trim() === "") {
            throw new Error("Description is required and must be a non-empty string.");
        }

        if (typeof redirectLink !== "string" || redirectLink.trim() === "") {
            throw new Error("Redirect Link is required and must be a non-empty string.");
        }

        if (!startedDate || isNaN(Date.parse(startedDate))) {
            throw new Error("Invalid Started Date. It must be a valid date.");
        }

        if (!endDate || isNaN(Date.parse(endDate))) {
            throw Error("Invalid End Date. It must be a valid date.");
        }

        if (typeof enabled !== "boolean") {
            throw new Error("Enabled must be a boolean value.");
        }

        const previouslyEnabledEvent = await prisma.events.findFirst({
            where: {
                enabled: true,
            },
        });

        // Disable the previously enabled event
        if (previouslyEnabledEvent) {
            await prisma.events.update({
                where: {
                    id: previouslyEnabledEvent.id,
                },
                data: {
                    enabled: false,
                },
            });
        }

        // Convert the startedDate and endDate to ISO date strings
        const startedDateISO = new Date(startedDate).toISOString();
        const endDateISO = new Date(endDate).toISOString();

        // Create the new event with ISO date strings
        const newEvent = await prisma.events.create({
            data: {
                title,
                description,
                redirectLink,
                startedDate: startedDateISO,
                endDate: endDateISO,
                enabled,
            },
        });

        return new Response(JSON.stringify(newEvent), { status: 200 });
    } catch (error) {
        console.error("Error processing request:", error);

        return new Response(JSON.stringify({ message: error }), { status: 400 });
    }
}
