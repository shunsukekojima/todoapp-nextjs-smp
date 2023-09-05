"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddTask.module.css";
import { postTodos } from "../api/api";
import { useSession } from "next-auth/react";

export default function AddTask() {
    const [tasktitle, setTasktitle] = useState("");
    const { data: session } = useSession();

    const handlesubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (session?.user.id !== undefined) {
            await postTodos(
                tasktitle,
                JSON.stringify(session?.user.id).replaceAll('"', "")
            );
        } else {
            // トーストをつけたい
            window.alert("ログインしてください");
        }
        setTasktitle("");
    };

    return (
        <form
            className={styles.formstyle}
            onSubmit={handlesubmit}>
            <input
                type="text"
                className={styles.inputtext}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setTasktitle(e.target.value)
                }
                value={tasktitle}
            />
            <button className={styles.addtaskbutton}>Add Task</button>
        </form>
    );
}
