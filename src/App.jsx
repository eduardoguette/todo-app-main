import { useEffect, useReducer, useState } from 'react';
import { AddTodo } from './components/AddTodo/AddTodo';
import { Header } from './components/ui/Header';
import { UserContext } from './context/UserContext';
import { todoReducer } from './store';
import { RouterApp } from './Router/RouterApp';

import './App.scss';
import { Wallpaper } from './components/ui/Wallpaper';

const init = () => JSON.parse(localStorage.getItem('todos')) || [];

function App() {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
    setDarkMode(JSON.parse(localStorage.getItem('dark-mode')));
  }, [todos]);

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo,
    });
  };

  const handleDelete = (id) => {
    dispatch({
      type: 'delete',
      payload: id,
    });
  };
  const handleUpdateTodo = (id) => {
    dispatch({
      type: 'update',
      payload: id,
    });
  };
  const handleSetTodos = (todos) => {
    dispatch({
      type: 'set_todos',
      payload: todos,
    });
  };
  const handleClearCompleted = () => {
    dispatch({
      type: 'clear_completed',
      payload: todos,
    });
  };

  return (
    <UserContext.Provider value={{ todos, handleUpdateTodo, handleDelete, handleSetTodos, handleClearCompleted, setDarkMode, darkMode }}>
      <div className={`App${darkMode ? ' dark-mode' : ''}`}>
          <Wallpaper />
        <div className='layout'>
          <Header />
          <AddTodo handleAddTodo={handleAddTodo} />
          <RouterApp />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
