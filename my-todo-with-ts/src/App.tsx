import React, { FC, ChangeEvent, useState } from 'react';
import './App.css';
import { Task } from './interfaces';
import TodoTask from './TodoTask';

const App: FC = () => {
  const [task, setTask] = useState<string>('');
  const [deadline, setDeadline] = useState<number>(0);
  const [todoList, setTodoList] = useState<Task[]>([]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.name === 'task') {
      setTask(event.target.value);
    }
    if (event.target.name === 'dealine') {
      setDeadline(Number(event.target.value));
    }
  };

  const addTask = (): void => {
    const newTask = { taskName: task, deadline: deadline };
    setTodoList([...todoList, newTask]);
    setTask('');
    setDeadline(0);
  };

  const completeTask = (taskNameToDelete: string): void => {
    setTodoList((preTodoList) =>
      preTodoList.filter((task) => task.taskName != taskNameToDelete)
    );
  };

  return (
    <div className='App'>
      <div className='header'>
        <div className='inputContainer'>
          <input
            type='text'
            placeholder='Task...'
            name='task'
            value={task}
            onChange={handleChange}
          />
          <input
            type='number'
            placeholder='Deadline (in Days)...'
            name='deadline'
            value={deadline}
            onChange={handleChange}
          />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todoList'>
        {todoList.map((task: Task, key: number) => (
          <TodoTask key={key} task={task} completeTask={completeTask} />
        ))}
      </div>
    </div>
  );
};

export default App;
