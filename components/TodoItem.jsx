const TodoItem = ({ todo  , todos , setTodos }) => {
    const deleteTodo = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }


    return (
        <div className="flex w-full items-center justify-between font-bold bg-green-300 p-2 text-white">{todo?.todo} <button type="button" className="bg-red-600 px-2 py-1 hover:bg-red-900 rounded-lg transition-colors" onClick={() => deleteTodo(todo.id)}>SIL</button></div>
    )
}

export default TodoItem