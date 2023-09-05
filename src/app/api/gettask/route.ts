import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

export async function GET() {
    const session = await getServerSession(options);
    // console.log(session);
    const userid = session?.user.id;
    const tasks = await getAllTasks(userid!);
    return NextResponse.json(tasks);
}

async function getAllTasks(userid: string) {
    // console.log(userid);
    const tasks = await prisma.task.findMany({
        where: { userId: userid },
    });
    return tasks;
}
