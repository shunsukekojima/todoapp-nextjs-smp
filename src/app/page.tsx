"use client";

import styles from "./page.module.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";
import { getALLTodos } from "./api/api";
import { useEffect, useState } from "react";
import { Task } from "./api/type";
import { useSession } from "next-auth/react";

export default function Home() {
    const [dbsource, setDBsource] = useState<Task[]>([]);
    const [execute, setExecute] = useState(0);
    const { data: session } = useSession();

    useEffect(() => {
        const fetchtasks = async () => {
            const tasks = await getALLTodos();
            setDBsource(tasks);
        };
        // console.log("test");
        fetchtasks();
    }, [execute]);

    const handlechangevalue = () => {
        setExecute(execute + 1);
    };

    return (
        <main className={styles.main}>
            <h1>Todo app</h1>
            <div className={styles.container}>
                <div className={styles.box}>
                    <AddTask execute={handlechangevalue} />
                    <TodoList
                        tasks={dbsource}
                        execute={handlechangevalue}
                    />
                </div>
            </div>
        </main>
    );
}
