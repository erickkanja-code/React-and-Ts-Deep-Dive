import React from 'react'
import { Todo } from '../model'
import { AiFillEdit, AiFillDelete } from "react-icons/ai"
import { MdDone } from "react-icons/md"
import { useState } from 'react'


interface Props{
    todo: Todo,
    todos: Todo[],
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



    const SingleTodo = ({todo, todos, setTodos}: Props) => {
        
    const [edit, setEdit] = useState<boolean>(false)
    const [editTodo, setEditTodo] = useState<string>(todo.todo)
    
    const handleDelete = (id: number) => {
        const newTodos: Todo[] = todos.filter((todo) => (
            todo.id !== id
        ))
        setTodos(newTodos)
    }
  
    const handleDone = (id: number) => {
        const newTodos: Todo[] = todos.map((todo) => (
            todo.id === id ? {...todo, isDone: !todo.isDone} : todo
        ))
        setTodos(newTodos)
    }
  
    return (
    <form className="todos__single">
        <span className="todos__single--text" style={{textDecoration: todo.isDone? "line-through": "none"}} >{todo.todo}</span>

        <div>
            <span className='icon' onClick={() =>{
                if (!edit && !todo.isDone) {
                    setEdit(!edit)
                }
            }}>
                <AiFillEdit />
            </span>
            <span className='icon' onClick={()=> handleDone(todo.id)}>
                <MdDone />
            </span>
            <span className='icon' onClick={()=>handleDelete(todo.id)}>
                <AiFillDelete />
            </span>
        </div>
    </form>
  )
}

export default SingleTodo
