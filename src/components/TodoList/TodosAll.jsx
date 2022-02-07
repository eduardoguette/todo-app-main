import { Reorder } from 'framer-motion';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import { TodoListItem } from '../TodoListItem/TodoListItem';
import './TodoList.scss';

export const TodosAll = () => {
  const { todos, handleSetTodos } = useContext(UserContext); 
  return (
    <Reorder.Group className='todo-list' axis='y' values={todos} onReorder={(items) => handleSetTodos(items)}>
      {todos.map((todo, index) => (
        <Reorder.Item key={todo.id} value={todo} 
        whileHover={{cursor:"grab", zIndex:99*9999999999}}
        whileDrag={{cursor:"grabbing", scale:1.1}}>
          <TodoListItem todo={todo.todo} key={todo.id} index={index} id={todo.id} done={todo.done} />
        </Reorder.Item>
      ))}
    </Reorder.Group>
  );
};
