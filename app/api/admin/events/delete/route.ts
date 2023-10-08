import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { id } = await request.json();

        // Delete the event using Prisma
        await prisma.events.delete({
            where: {
                id: id,
            },
        });

        // Return a success response
        return new Response(null, { status: 204 }); // No Content
    } catch (error) {
        console.error("Error deleting event:", error);

        // Return an error response
        return new Response(JSON.stringify({ message: "Error deleting event" }), { status: 500 });
    }
}
