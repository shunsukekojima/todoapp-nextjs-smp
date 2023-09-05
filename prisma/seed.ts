import { PrismaClient } from "@prisma/client";
import { hash } from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
    const password = await hash("password123", 12);
    const user = await prisma.users.upsert({
        where: { email: "admin@example.com" },
        update: {},
        create: {
            email: "admin@example.com",
            password,
        },
    });
    console.log({ user });
}
main()
    .then(() => prisma.$disconnect())
    .catch(async e => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
