"use client";

import React, { ChangeEvent, FormEvent, useState } from "react";
import styles from "./AddTask.module.css";
import { getALLTodos, postTodos } from "../api/api";

export default function AddTask() {
    const [tasktitle, setTasktitle] = useState("");

    const handlesubmit = async (e: FormEvent) => {
        e.preventDefault();
        await postTodos(tasktitle);
        await getALLTodos();
        setTasktitle("");
    };

    return (
        <form className={styles.formstyle} onSubmit={handlesubmit}>
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
