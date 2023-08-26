import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 
import { getALLTodos } from "../api";
import { Task } from '../type';

const prisma = new PrismaClient();

export async function POST(req:NextRequest) {
    const body = await req.json();
    await prisma.task.create({
        data:{
            tasks: body.task,
        }
    })

    return NextResponse.json(body);
}
