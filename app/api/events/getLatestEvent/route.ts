import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    const currentDate = new Date(); // Current date

    const event = await prisma.events.findFirst({
        orderBy: {
            createdAt: "desc"
        }
    });

    // Check if currentDate is between the start and end dates of the event
    const isEventActive = event && event.startedDate <= currentDate && currentDate <= event.endDate;

    const responseObject = {
        event,
        isEventActive
    };

    return new Response(JSON.stringify(responseObject), { status: 200 });
}
