"use client";

import styles from "./page.module.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getALLTodos } from "./api/api";
import { useEffect, useState } from "react";
import { Task } from "./api/type";

export default function Home() {
    const [dbsource, setDBsource] = useState<Task[]>([]);
    useEffect(() => {
        const fetchtasks = async () => {
            const tasks = await getALLTodos();
            setDBsource(tasks);
        };
        fetchtasks();
    });
    // console.log(tasks);

    return (
        <main className={styles.main}>
            <h1>Next.js13 Todo app</h1>
            <div className={styles.container}>
                <div className={styles.box}>
                    <AddTask />
                    <TodoList tasks={dbsource} />
                </div>
            </div>
        </main>
    );
}
