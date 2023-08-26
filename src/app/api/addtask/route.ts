import { NextRequest,NextResponse } from "next/server"; 
import prisma from "@/lib/prisma";

export async function POST(req:NextRequest) {
    const body = await req.json();
    await prisma.task.create({
        data:{
            tasks: body.task,
        }
    })

    return NextResponse.json(body);
}
