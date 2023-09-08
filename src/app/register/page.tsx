import { RegisterForm } from "./registerform";
import styles from "./registerform.module.css";
import { SignInButton } from "../components/LoginButton";

import React from "react";

export default function RegisterPage() {
    return (
        <div className={styles.registerpage}>
            <div>
                <h1 className={styles.title}>新規登録</h1>
                <RegisterForm />
                <SignInButton />
            </div>
        </div>
    );
}
