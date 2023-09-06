import { RegisterForm } from "./form";
import styles from "./form.module.css";

import React from "react";

export default function RegisterPage() {
    return (
        <div className={styles.registerpage}>
            <div>
                <h1 className={styles.title}>新規登録</h1>
                <RegisterForm />
            </div>
        </div>
    );
}
