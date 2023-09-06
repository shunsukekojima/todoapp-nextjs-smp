import prisma from "@/lib/prisma";
import { hash } from "bcryptjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const { email, password } = (await req.json()) as {
            email: string;
            password: string;
        };

        const hashedPassword = await hash(password, 12);

        const user = await prisma.users.create({
            data: {
                email: email.toLowerCase(),
                password: hashedPassword,
            },
        });

        return NextResponse.json({
            user: {
                email: user.email,
            },
        });
    } catch (error: any) {
        return new NextResponse(
            JSON.stringify({ status: "error", message: error.message }),
            { status: 500 }
        );
    }
}
