 
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { TodoListItem } from '../TodoListItem/TodoListItem';

import './TodoList.scss';


export const TodosActive = () => {
  const {todos} = useContext(UserContext) 
  return (
    <section  className='todo-list no-move'>
      {todos.filter((todo) => !todo.done && todo ).map(({ todo, id, done }) => (
        <TodoListItem todo={todo} key={id} id={id} done={done} />
      ))}
    </section>
  );
};
