import { Todo } from "./type";

export const getALLTodos = async ():Promise<Todo> => {
    const res = await fetch("http://localhost:3000/api/gettask");
    const todos = await res.json()
    
    return todos;
}