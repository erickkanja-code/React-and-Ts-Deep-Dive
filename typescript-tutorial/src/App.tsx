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
    const newTodos: Todo[] = [...todos, {id: Date.now(), todo: todo, isDone: false }]
    if (todo) {
      setTodos(newTodos)
    }
    setTodo('')
  }

  return (
    <div className="App">
      <span className="heading">Taskify</span>
      <InputField
        todo={todo}
        setTodo={setTodo}
        handleAdd={handleAdd}
      />
      {todos.map((t) => (
        <ul>
          <li>{t.todo}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
