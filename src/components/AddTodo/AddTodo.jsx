import React, { useRef } from 'react'; 
import { useForm } from '../../hooks/useForm';
import './AddTodo.scss';
export const AddTodo = ({ handleAddTodo }) => {
  const [{ todo }, handleInputChange, reset] = useForm({
    todo: '',
  });
  const check = useRef()
  const handleSubmit = (e) => { 
    e.preventDefault();
    handleAddTodo({
      id: Date.now(),
      todo,
      done: check.current.checked,
    });
    check.current.checked = false
    reset()
  };
  return (
    <>
      <article className='todo'>
        <form onSubmit={handleSubmit} className='todo__layout'>
          <input ref={check} type='checkbox' name='check-todo' id='check' role="New Todo" />
          <label htmlFor='check' className='todo__state'></label>
          <input value={todo} className='todo__input' onChange={handleInputChange} placeholder='Create a new todo...' type='text' name='todo' id='todo' />
        </form>
      </article>
    </>
  );
};
