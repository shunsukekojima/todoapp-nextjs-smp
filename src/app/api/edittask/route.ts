import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export async function PUT(req:NextRequest) {
    const id = parseInt(req.nextUrl.searchParams.get('id')!);
    const body = await req.json();
    await prisma.task.update({
        where:{
            id: id,
        },
        data:{
            tasks:body.task
        },
    })

    return NextResponse.json(body);
}
