import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 
import { getALLTodos } from "../api";
import { Task } from '../type';

const prisma = new PrismaClient();

export async function DELETE(req:NextRequest) {
    const id = parseInt(req.nextUrl.searchParams.get('id')!);
    await prisma.task.delete({
        where:{
            id: id,
        }
    })

    return NextResponse.json(id);
}
