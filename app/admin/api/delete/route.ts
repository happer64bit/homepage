import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    try {
        const { id } = await req.json()
        
        await prisma.articles.delete({
            where: {
                id
            }
        })

        return Response.json({
            message: "Deleted Successfully",
            status: "success"
        })
    } catch (err: any) {
        return Response.json({
            message: err.name,
            status: "error"
        })
    } finally {
        await prisma.$disconnect()
    }
}