import React, { useEffect, useRef, useState } from 'react';
import { Todo } from '../model';
import { AiFillEdit, AiFillDelete } from 'react-icons/ai';
import { MdDone } from 'react-icons/md';
import TodoList from './TodoList';
import { Draggable } from 'react-beautiful-dnd';

interface Props {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const SingleTodo = ({ index, todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);

  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id == id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => !(todo.id == id)));
  };

  const handleEdit = (event: React.FormEvent, id: number) => {
    event.preventDefault();

    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, todo: editTodo };
        }
        return { ...todo };
      })
    );

    setEdit(false);
  };

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided, snapshot) => (
        <form
          className={`todos__single ${snapshot.isDragging ? 'drag' : ''}`}
          onSubmit={(event) => {
            handleEdit(event, todo.id);
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit && (
            <input
              value={editTodo}
              onChange={(event) => setEditTodo(event.target.value)}
              className='todos__single--text'
            />
          )}
          {!edit && todo.isDone && (
            <s className='todos__single--text'>{todo.todo}</s>
          )}
          {!edit && !todo.isDone && (
            <span className='todos__single--text'>{todo.todo}</span>
          )}
          <div>
            <span
              className='icon'
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span
              className='icon'
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              <AiFillDelete />
            </span>
            <span
              className='icon'
              onClick={() => {
                handleDone(todo.id);
              }}
            >
              <MdDone />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
