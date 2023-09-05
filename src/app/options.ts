import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";
import { compare } from "bcryptjs";

export const options: NextAuthOptions = {
    debug: true,
    session: { strategy: "jwt" },
    providers: [
        CredentialsProvider({
            name: "Sign In",
            credentials: {
                email: {
                    label: "Email",
                    type: "email",
                    placeholder: "example@example.com",
                },
                password: { label: "Password", type: "password" },
            },
            async authorize(credentials) {
                // const users = { id:"1",email:"user1@example.com", password: "password1" };
                // return users;
                if (!credentials?.email || !credentials.password) {
                    return null;
                }

                const user = await prisma.users.findUnique({
                    where: { email: credentials.email },
                });

                if (
                    !user ||
                    !(await compare(credentials.password, user.password))
                ) {
                    return null;
                }

                return {
                    id: user.userId,
                    email: user.email,
                    randomKey: "Heycool",
                };
            },
        }),
    ],
    callbacks: {
        session: ({ session, token }) => {
            // console.log("session Callback", { session, token });
            return {
                ...session,
                user: {
                    ...session.user,
                    id: token.id,
                    randomKey: token.randomKey,
                },
            };
        },

        jwt: ({ token, user }) => {
            if (user) {
                const u = user as unknown as any;
                return {
                    ...token,
                    id: u.id,
                    randomKey: u.randomKey,
                };
            }
            return token;
        },
    },
};
