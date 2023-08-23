import React from "react";
import styles from "./Todolist.module.css";

export default function TodoList() {
    return (
        <ul className={styles.list}>
            <li className={styles.task}>
                <span>散歩</span>
                <div>
                    <button className={styles.deletebutton}>削除</button>
                    <button className={styles.editbutton}>編集</button>
                </div>
            </li>
            <li className={styles.task}>
                <span>散歩</span>
                <div>
                    <button className={styles.deletebutton}>削除</button>
                    <button className={styles.editbutton}>編集</button>
                </div>
            </li>
        </ul>
    );
}
