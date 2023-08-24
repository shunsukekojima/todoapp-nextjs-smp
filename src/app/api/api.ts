import { env } from "process";
import { Todo } from "./type";

export const getALLTodos = async ():Promise<Todo> => {
    const res = await fetch();
    const todos = await res.json()

    return todos;
}