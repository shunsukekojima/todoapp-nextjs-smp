"use client";
import React from "react";
import styles from "./Todolist.module.css";
import { Task } from "../api/type";
import Todo from "./Todo";

interface TasksProps {
    tasks: Task[];
}

export default function TodoList({ tasks }: TasksProps) {
    return (
        <ul className={styles.list}>
            {tasks.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                />
            ))}
        </ul>
    );
}
