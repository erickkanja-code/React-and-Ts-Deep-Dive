import React from 'react'
import { Todo } from '../model'

interface Props{
    todos: Todo[]
}


const TodoList: React.FC<Props> = ({todos}) => {
  return (
    <ul>
      {todos.map((t) => (
          <li>{t.todo}</li>

      ))}
    </ul>
  )
}

export default TodoList
