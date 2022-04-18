import React, { FC, useState } from 'react';
import './App.css';
import InputField from './components/InputField';
import { Todo } from './model';

const App: FC = (): JSX.Element => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (todo) {
      const newTodoToAdd: Todo = {
        id: Date.now(),
        todo: todo,
        isDone: false,
      };

      setTodos([...todos, newTodoToAdd]);
      setTodo('');
    }
  };

  console.log;
  console.log(todos);

  return (
    <div className='App'>
      <span className='heading'>taskify</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
};

export default App;