import React from 'react'
import { Todo } from '../model'
import './styles.css'

interface Props{
    todos: Todo[]
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}


const TodoList: React.FC<Props> = ({todos, setTodos}) => {
  return (
    <ul>
      {todos.map((t) => (
          <li>{t.todo}</li>

      ))}
    </ul>
  )
}

export default TodoList
