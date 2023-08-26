"use client";
import React, { useState } from "react";
import styles from "./Todolist.module.css";
import { Task } from "../api/type";
import { deleteTodos, editTodos, getALLTodos } from "../api/api";
import Todo from "./Todo";
import { todo } from "node:test";

interface TasksProps {
    tasks: Task[];
}

export default function TodoList({ tasks }: TasksProps) {
    return (
        <ul className={styles.list}>
            {tasks.map(todo => (
                <Todo key={todo.id} todo={todo} />
            ))}
        </ul>
    );
}
