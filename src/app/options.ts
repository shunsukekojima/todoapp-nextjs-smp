import type { NextAuthOptions} from "next-auth";
import GitHubProvider from "next-auth/providers/github"
import CredentialsProvider from 'next-auth/providers/credentials';

export const options: NextAuthOptions ={
    debug: true,
    session: {strategy:"jwt"},
    providers:[
        CredentialsProvider({
            name: "Sign In",
            credentials:{
                email:{
                    label: "Email",
                    type: "Email",
                    placeholder: "example@example.com",
                },
                password: {label:"Password", type:"password"},
            },
            async authorize(credentials){
                const users = { id:"1",email:"user1@example.com", password: "password1" };
                return users;
            }
        })
    ]
}
