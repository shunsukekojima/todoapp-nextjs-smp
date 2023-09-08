import { LoginForm } from "./loginform";
import { RegisterButton } from "../components/LoginButton";
import styles from "./loginform.module.css";

import React from "react";

export default function RegisterPage() {
    return (
        <div className={styles.registerpage}>
            <div>
                <h1 className={styles.title}>ログイン</h1>
                <LoginForm />
                <RegisterButton />
            </div>
        </div>
    );
}
