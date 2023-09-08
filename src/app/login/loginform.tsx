"use client";

import { signIn } from "next-auth/react";
import { ChangeEvent, useState } from "react";
import styles from "./loginform.module.css";
import { useSearchParams, useRouter } from "next/navigation";

export const LoginForm = () => {
    const router = useRouter();
    let [loading, setLoading] = useState(false);
    let [formValues, setFormValues] = useState({
        email: "",
        password: "",
    });
    let [error, setError] = useState("");

    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackurl") || "/";

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await signIn("credentials", {
                redirect: false,
                email: formValues.email,
                password: formValues.password,
                callbackUrl,
            });

            setLoading(false);

            if (!res?.error) {
                router.push(callbackUrl);
                router.refresh();
            } else {
                setError("Emailかパスワードが間違っています");
            }
        } catch (error: any) {
            setLoading(false);
            console.error(error);
            setError(error);
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
                    backgroundColor: `${loading ? "#ccc" : "#3446eb"}`,
                }}
                className={styles.formbutton}
                disabled={loading}>
                {loading ? "loading..." : "Register"}
            </button>
        </form>
    );
};
