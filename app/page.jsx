"use client"
import Header from "@/components/Header"
import TodoItem from "@/components/TodoItem"
import { useEffect, useState } from "react"

function HomePage() {
    const [todos , setTodos] = useState([])

    useEffect(() => {
        localStorage.getItem("todos") ? setTodos(JSON.parse(localStorage.getItem("todos"))) : setTodos([])
    } , [])

    useEffect(() => {
        localStorage.setItem("todos" , JSON.stringify(todos))
    } , [todos])

    return (
        <div className="rounded-lg bg-slate-300 w-[400px] flex flex-col items-center p-3 gap-3"> 
            <h1 className="text-xl font-bold">TODO List</h1>
            <Header setTodos={setTodos} todos={todos} />
            <div className="w-full px-2 flex flex-col items-center gap-2">
                {todos.map((todo , i) => (
                    <TodoItem todos={todos} setTodos={setTodos} todo={todo} key={i} />
                ))}
            </div>
        </div>
    )
}

export default HomePage