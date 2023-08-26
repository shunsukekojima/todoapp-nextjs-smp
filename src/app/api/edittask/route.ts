import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 

export async function PUT(req:NextRequest) {
    const id = parseInt(req.nextUrl.searchParams.get('id')!);
    const body = await req.json();
    console.log(body)
    await prisma.task.update({
        where:{
            id: id,
        },
        data:{
            tasks: body.task,
        },
    })

    return NextResponse.json(body);
}
