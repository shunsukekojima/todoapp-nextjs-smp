import { Todo } from "./type";

export const getALLTodos = async ():Promise<Todo> => {
    const res = await fetch('http://localhost:300/api/gettask');
    const todos = await res.json()

    return todos;
}