import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
    try {
        const events = await prisma.events.findMany({
            orderBy: {
                createdAt: "desc"
            }
        });

        return new Response(JSON.stringify(events))
    } catch (err) {
        return new Response(JSON.stringify({
            message: "Internal Server Error",
            type: "error"
        }), {
            status: 500
        })
    } finally {
        await prisma.$disconnect()
    }
}