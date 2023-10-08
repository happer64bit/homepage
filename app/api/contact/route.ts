import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
    try {
        const { email, message } = await request.json();

        const contact = await prisma.contacts.create({
            data: {
                email,
                message,
            },
        });

        return new Response(JSON.stringify({ success: true, contact }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: error }), {
            status: 500, // Internal Server Error
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
