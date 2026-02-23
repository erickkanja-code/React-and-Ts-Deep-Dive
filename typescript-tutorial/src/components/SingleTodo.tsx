import React from 'react'
import { Todo } from '../model'
interface Props{
    todo: Todo,
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const SingleTodo = ({todo, setTodos}: Props) => {
  return (
    <li>{todo.todo}</li>
  )
}

export default SingleTodo
