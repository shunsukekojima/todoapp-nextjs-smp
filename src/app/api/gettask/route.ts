import { NextRequest,NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client"; 

const prisma = new PrismaClient();

export async function GET() {
    const tasks = await getAllTasks();
    return NextResponse.json(tasks)
}

async function getAllTasks() {
    const tasks = await prisma.task.findMany()
    return tasks
}