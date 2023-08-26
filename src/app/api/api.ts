import { Task } from "./type";

export const getALLTodos = async ():Promise<Task[]> => {
    const res = await fetch('http://localhost:3000/api/gettask',{
        cache:"no-store"
    });
    const todos = await res.json()

    return todos;
}

export const postTodos = async (task: string):Promise<Task> => {
    const res = await fetch('http://localhost:3000/api/addtask',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({task}),
    });
    
    const newtask = await res.json();
    return newtask;
}