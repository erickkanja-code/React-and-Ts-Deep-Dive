import React, { useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';
import { FormEvent } from 'react';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('')
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e.target)
    const newTodos: Todo[] = [...todos, {id: todos.length + 1, todo: todo, isDone: false }]
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      {todos.map((item) => (
        <ul>
          <li>{item.todo}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
