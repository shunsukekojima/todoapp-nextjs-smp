import React from "react";
import styles from "./AddTask.module.css";

export default function AddTask() {
    return (
        <form className={styles.formstyle}>
            <input type="text" className={styles.inputtext} />
            <button className={styles.addtaskbutton}>Add Task</button>
        </form>
    );
}
