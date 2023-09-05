import { SignInButton, SignOutButton } from "./LoginButton";
import styles from "./Header.module.css";
import { getServerSession } from "next-auth/next";
import { options } from "@/app/options";

export default async function Header() {
    const session = await getServerSession(options);

    return (
        <div className={styles.head}>
            {session?.user.email !== undefined ? (
                <SignOutButton />
            ) : (
                <SignInButton />
            )}

            <p>
                {session?.user.email !== undefined
                    ? JSON.stringify(session?.user.email).replaceAll('"', "")
                    : ""}
            </p>
        </div>
    );
}
