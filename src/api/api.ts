import { Todo } from "./type";

export const getALLTodos = async ():Promise<Todo> => {
    const res = await fetch("/api/gettask");
    const todos = res.json();

    return todos;
}