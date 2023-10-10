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
        console.error("POST Error:", error);

        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500, // Internal Server Error
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export async function GET(req: NextRequest) {
    try {
        const contacts = await prisma.contacts.findMany();

        return new Response(JSON.stringify(contacts), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 200,
        });
    } catch (error) {
        console.error("GET Error:", error);

        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500, // Internal Server Error
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}

export async function DELETE(req: NextRequest) {
    try {
        const { id } = await req.json();

        const contact = await prisma.contacts.delete({
            where: {
                id,
            },
        });

        return new Response(JSON.stringify({ message: "Successfully deleted contact" }), {
            status: 200,
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        console.error("DELETE Error:", error);

        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500, // Internal Server Error
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
