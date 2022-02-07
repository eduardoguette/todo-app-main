import { useContext, useEffect } from 'react';
import moon from '/assets/images/icon-moon.svg';
import sun from '/assets/images/icon-sun.svg';

import './ToggleDarkMode.scss';
import { UserContext } from '../../context/UserContext';
import { AnimatePresence, motion } from 'framer-motion';

export const ToggleDarkMode = () => {
  const { darkMode, setDarkMode } = useContext(UserContext);

  const prefresDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
  useEffect(() => {
    if (JSON.parse(localStorage.getItem('dark-mode'))) 
    localStorage.setItem('dark-mode', prefresDarkScheme.matches);
  }, []);

  const handleClickDarkMode = () => {
    localStorage.setItem('dark-mode', !darkMode)
    setDarkMode(!darkMode);
  };
  return (
    <AnimatePresence>
      <motion.button initial={{ rotate: '180deg' }} animate={{ rotate: '0deg' }} whileTap={{scale: 1.2}}  whileHover={{scale:.9, cursor:"pointer"}}
      className='dark-mode' onClick={handleClickDarkMode}>
        {darkMode ? <img className='sun' src={sun} alt='Moon svg' /> : <img className='moon' src={moon} alt='Moon svg' />}
      </motion.button>
    </AnimatePresence>
  );
};
