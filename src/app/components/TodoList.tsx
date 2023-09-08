"use client";
import React from "react";
import styles from "./Todolist.module.css";
import { Task } from "../api/type";
import Todo from "./Todo";

interface TasksProps {
    tasks: Task[];
    execute: () => void;
}

export default function TodoList({ tasks, execute }: TasksProps) {
    console.log(execute);
    return (
        <ul className={styles.list}>
            {tasks.map(todo => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    execute={execute}
                />
            ))}
        </ul>
    );
}
