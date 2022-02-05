import { AnimatePresence, motion } from 'framer-motion';
import React, { useContext } from 'react';
import { UserContext } from '../../context/UserContext';
import './TodoListItem.scss';
import cross from '/assets/images/icon-cross.svg'

const variantes = {
  hidden: {
    opacity: 0,
  },
  visible: ({delay}) => ({
    opacity: 1,
    transition: {
      delay,
      duration: 1,
    },
  }),
};

export const TodoListItem = ({ todo, id, done, index }) => {
  const { handleUpdateTodo, handleDelete } = useContext(UserContext);
  const handleChangeTodo = (id) => {
    handleUpdateTodo(id);
  };
  return (
    <motion.article
      custom={{delay: (index + 1) * .05}}
      className='todo-item' 
      initial='hidden' 
      animate='visible' 
      exit='hidden' 
      variants={variantes} 
      layoutId={id}>
      <label htmlFor={id} className={`todo-item__state ${done ? 'done' : ''}`} onClick={() => handleChangeTodo(id)}></label>
      <div className='todo-item-content' onClick={() => handleChangeTodo(id)}>{todo}</div>
      <motion.button whileTap={{scale:0.9}} whileHover={{scale:1.5}} className='todo-item__delete' onClick={() => handleDelete(id)}>
        <img src={cross} alt='Delete todo' height={16} width={16} />
      </motion.button>
    </motion.article>
  );
};
