"use client";
import React, { useState } from "react";
import styles from "./Todolist.module.css";
import { Task } from "../api/type";
import { deleteTodos, editTodos, getALLTodos } from "../api/api";

interface TasksProps {
    tasks: Task[];
}

export default function TodoList({ tasks }: TasksProps) {
    const [isEditing, setIsEditing] = useState(false);

    const deleteHundleClick = async (id: number) => {
        deleteTodos(id);
        await getALLTodos();
    };

    const editHundleClick = async () => {
        setIsEditing(true);
    };

    const saveHundleClick = async () => {
        setIsEditing(false);
    };

    return (
        <ul className={styles.list}>
            {tasks.map(todo => (
                <li key={todo.id} className={styles.task}>
                    {isEditing ? (
                        <input type="text" className={styles.edittask} />
                    ) : (
                        <span>{todo.tasks}</span>
                    )}

                    <div>
                        <button
                            className={styles.deletebutton}
                            onClick={() => deleteHundleClick(todo.id)}
                        >
                            削除
                        </button>

                        {isEditing ? (
                            <button
                                className={styles.editbutton}
                                onClick={saveHundleClick}
                            >
                                保存
                            </button>
                        ) : (
                            <button
                                className={styles.editbutton}
                                onClick={editHundleClick}
                            >
                                編集
                            </button>
                        )}
                    </div>
                </li>
            ))}
        </ul>
    );
}
