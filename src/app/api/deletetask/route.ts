import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(req:NextRequest) {
    const id = parseInt(req.nextUrl.searchParams.get('id')!);
    await prisma.task.delete({
        where:{
            id: id,
        }
    })

    return NextResponse.json(id);
}
