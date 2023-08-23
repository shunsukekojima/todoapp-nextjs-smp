import Image from "next/image";
import styles from "./page.module.css";
import AddTask from "./components/AddTask";
import TodoList from "./components/TodoList";

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Next.js13 Todo app</h1>
            <div className={styles.container}>
                <div className={styles.box}>
                    <AddTask />
                    <TodoList />
                </div>
            </div>
        </main>
    );
}
