"use client";

import React from "react";
import Link from "next/link";
import styles from "./LoginButton.module.css";
import { signIn, signOut } from "next-auth/react";

export function SignInButton() {
    return (
        <button
            className={styles.signinbutton}
            onClick={() => signIn()}>
            Sign In
        </button>
    );
}

export function SignOutButton() {
    return (
        <button
            className={styles.signinbutton}
            onClick={() => signOut()}>
            Sign Out
        </button>
    );
}

export function RegisterButton() {
    return (
        <Link
            className={styles.signinbutton}
            href="/register">
            新規登録
        </Link>
    );
}

export function ProfileButton() {
    return (
        <Link
            className={styles.signinbutton}
            href="/register">
            Profile
        </Link>
    );
}
