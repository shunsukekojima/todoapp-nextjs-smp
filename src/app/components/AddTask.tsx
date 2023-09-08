"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddTask.module.css";
import { getALLTodos, postTodos } from "../api/api";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AddTask(props: any) {
    const router = useRouter();
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
        props.execute("テスト");
        setTasktitle("");
        // router.refresh();
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
