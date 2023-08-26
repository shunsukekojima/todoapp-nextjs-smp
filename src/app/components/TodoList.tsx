import React from "react";
import styles from "./Todolist.module.css";
import { Task } from "../api/type";

interface TasksProps {
    tasks: Task[];
}

export default function TodoList({ tasks }: TasksProps) {
    return (
        <ul className={styles.list}>
            {tasks.map(todo => (
                <li key={todo.id} className={styles.task}>
                    <span>{todo.tasks}</span>
                    <div>
                        <button className={styles.deletebutton}>削除</button>
                        <button className={styles.editbutton}>編集</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}
