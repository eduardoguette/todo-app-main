import React from 'react';
import { useContext, useEffect } from 'react/cjs/react.development';
import moon from '/assets/images/icon-moon.svg';
import sun from '/assets/images/icon-sun.svg';

import './ToggleDarkMode.scss';
import { UserContext } from '../../context/UserContext';

export const ToggleDarkMode = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);

  const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  useEffect(() => {
    localStorage.setItem('dark-mode', prefresDarkScheme.matches);
  }, []);

  const handleClickDarkMode = () => {
    setDarkMode(!darkMode)
  };
  return (
    <button className='dark-mode' onClick={handleClickDarkMode}>
      {darkMode ? <img className='sun' src={sun} alt='Moon svg' /> : <img className='moon' src={moon} alt='Moon svg' />}
    </button>
  );
};
