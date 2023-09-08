"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import styles from "./registerform.module.css";

export const RegisterForm = () => {
    let [loading, setLoading] = useState(false);
    let [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/register", {
                method: "POST",
                body: JSON.stringify(formValues),
                headers: { "Content-Type": "application/json" },
            });

            setLoading(false);
            if (!res.ok) {
                alert((await res.json()).message);
                return;
            }

            signIn(undefined, { callbackUrl: "/" });
        } catch (error: any) {
            setLoading(false);
            console.error(error);
            alert(error.message);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    return (
        <form
            onSubmit={onSubmit}
            className={styles.formcss}>
            <label htmlFor="email">Email</label>
            <input
                required
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                className={styles.textbox}
            />
            <label htmlFor="password">Password</label>
            <input
                required
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleChange}
                className={styles.textbox}
            />
            <button
                style={{
                    backgroundColor: `${loading} ? "#ccc" : "#3446eb"`,
                }}
                className={styles.formbutton}
                disabled={loading}>
                {loading ? "loading..." : "Register"}
            </button>
        </form>
    );
};
