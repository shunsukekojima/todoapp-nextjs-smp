import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    const tasks = await getAllTasks();
    return NextResponse.json(tasks)
}

async function getAllTasks() {
    const tasks = await prisma.task.findMany()
    return tasks
}