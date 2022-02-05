import { NavLink } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { UserContext } from '../../context/UserContext';
import './Footer.scss';
export const Footer = () => {
  const { todos, handleClearCompleted } = useContext(UserContext);
  return (
    <footer className='footer'>
      <div className='footer__info'>
        <p className='footer__info-total'>{todos.length} items left</p>
        <button className='footer__info-btn' onClick={handleClearCompleted}>
          Clear Completed
        </button>
      </div>
      <ul className='footer__list'>
        <li>{todos.length} items left</li>
        <div className='center'> 
          <li>
            <NavLink to='/' className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
              All
            </NavLink>
          </li>
          <li>
            <NavLink to='/active' className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
              Active
            </NavLink>
          </li>
          <li>
            <NavLink to='/completed' className={({ isActive }) => (isActive ? 'nav active' : 'nav')}>
              Completed
            </NavLink>
          </li>
        </div>

        <li>
          <button className='footer__info-btn' onClick={handleClearCompleted}>
            Clear Completed
          </button>
        </li>
      </ul>

      <div className='footer__instucctions'>
        <p>Drag and drop to reorder list</p>
      </div>
    </footer>
  );
};
