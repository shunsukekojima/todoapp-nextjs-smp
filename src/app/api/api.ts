import { Task } from "./type";

export const getALLTodos = async (): Promise<Task[]> => {
    const res = await fetch("http://localhost:3000/api/gettask", {
        cache: "no-store",
    });
    const todos = await res.json();

    return todos;
};

export const postTodos = async (
    task: string,
    userId: string
): Promise<Task> => {
    const res = await fetch("http://localhost:3000/api/addtask", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ task, userId }),
    });
    const newtask = await res.json();
    return newtask;
};

export const deleteTodos = async (id: number): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3000/api/deletetask?id=${id}`, {
        method: "DELETE",
    });
    const deletetodos = await res.json();
    return deletetodos;
};

export const editTodos = async (
    id: number,
    newtext: string
): Promise<Task[]> => {
    const res = await fetch(`http://localhost:3000/api/edittask?id=${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ task: newtext }),
    });
    const updatedtodos = await res.json();
    return updatedtodos;
};
