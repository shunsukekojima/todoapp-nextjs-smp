import { NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient;

const gettasks = async () => {
    const tasks = await prisma.task.findMany()    
}
