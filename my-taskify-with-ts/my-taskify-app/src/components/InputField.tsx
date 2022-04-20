import React, { FC, useRef } from 'react';
import './styles.css';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent<HTMLFormElement>) => void;
}

const InputField: FC<Props> = ({
  todo,
  setTodo,
  handleAdd,
}: Props): JSX.Element => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='input'
      onSubmit={(event) => {
        handleAdd(event);
        inputRef.current?.blur();
      }}
    >
      <input
        ref={inputRef}
        type='input'
        value={todo}
        onChange={(event) => setTodo(event.target.value)}
        placeholder='Enter a task'
        className='input__box'
      />
      <button className='input_sumbit' type='submit'>
        Go
      </button>
    </form>
  );
};

export default InputField;
