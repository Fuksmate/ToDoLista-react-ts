import React, { useState } from 'react'
import { AddTodoForm } from './components/AddTodoForm/AddTodoForm';
import { TodoListItem } from './components/TodoListItem/TodoListItem';

interface Todo { text: string; complete: boolean };
type AddTodo = (text: string) => void;

const initialTodos: Todo[] = [
  {
    text: 'Kupic samochod',
    complete: false
  },
  {
    text: 'Zbudowac dom',
    complete: false
  },
  {
    text: 'Write app',
    complete: true,
  },
  {
    text: 'Write app',
    complete: true,
  }
];
function App() {
  const [todos, setTodos] = useState(initialTodos);

  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map((todo) => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);

  };

  const addTodo: AddTodo = (text: string) => {
    const newTodo = { text, complete: false };
    setTodos([...todos, newTodo]);
  };

  return (
    <div>
      {todos.map((todo) => (
        <TodoListItem key={todo.text} todo={todo} toggleTodo={toggleTodo} />
      ))}
      <AddTodoForm addTodo={addTodo} />    </div>
  );
}

export default App;