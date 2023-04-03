"use client"

import { useState } from "react"
import { uuid } from "uuidv4"

const Header = ({ setTodos, todos }) => {
    const [todo, setTodo] = useState("")

    const addTodo = (e) => {
        e.preventDefault()
        if (todo !== "") {
            setTodos([...todos, {
                id : uuid() , 
                todo : todo ,
            }])
            setTodo("")
        }
        else {
            alert("Bos Buraxila Bilmez ")
        }
    }

    return (
        <form onSubmit={(e) => addTodo(e)} className="flex flex-col items-center gap-2">
            <input className="w-72 border-none rounded-lg outline-none py-1 px-2" placeholder="Todo" type="text" value={todo} onChange={(e) => setTodo(e.target.value)} />
            <button className="w-32 bg-red-500 text-white font-bold rounded-lg hover:bg-red-700 transition-colors" type="submit">Add</button>
        </form>
    )
}

export default Header