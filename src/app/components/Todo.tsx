import React, { useState } from "react";
import { Task } from "../api/type";
import { deleteTodos, editTodos, getALLTodos } from "../api/api";
import styles from "./Todo.module.css";

interface TodoListProps {
    todo: Task;
    execute: () => void;
}

export default function Todo({ todo, execute }: TodoListProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [isEditTask, setIsEditTask] = useState(todo.tasks);

    const deleteHundleClick = async (id: number) => {
        deleteTodos(id);
        await getALLTodos();
        execute();
    };

    const editHundleClick = async () => {
        setIsEditing(true);
    };

    const saveHundleClick = async () => {
        await editTodos(todo.id, isEditTask);
        execute();
        setIsEditing(false);
    };
    return (
        <li
            key={todo.id}
            className={styles.task}>
            {isEditing ? (
                <input
                    type="text"
                    className={styles.edittask}
                    value={isEditTask}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setIsEditTask(e.target.value)
                    }
                />
            ) : (
                <span>{todo.tasks}</span>
            )}

            <div>
                <button
                    className={styles.deletebutton}
                    onClick={() => deleteHundleClick(todo.id)}>
                    削除
                </button>

                {isEditing ? (
                    <button
                        className={styles.editbutton}
                        onClick={saveHundleClick}>
                        保存
                    </button>
                ) : (
                    <button
                        className={styles.editbutton}
                        onClick={editHundleClick}>
                        編集
                    </button>
                )}
            </div>
        </li>
    );
}
