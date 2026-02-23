import React from 'react'
import { Todo } from '../model'

interface Props{
    todos: Todo[]
}


const TodoList = ({todos}: Props) => {
  return (
    <ul>
      {todos.map((t) => (
          <li>{t.todo}</li>

      ))}
    </ul>
  )
}

export default TodoList
