import React from 'react';
import { motion } from 'framer-motion';

import './Header.scss';
import { ToggleDarkMode } from './ToggleDarkMode';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__layout'>
        <motion.h1
          className='header__title'
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            delay: 0.2,
          }}
        >
          TODO
        </motion.h1>

        <ToggleDarkMode/>
      </div>
    </header>
  );
};
