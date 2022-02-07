import React from 'react';
import { motion } from 'framer-motion';

import './Header.scss';
import { ToggleDarkMode } from './ToggleDarkMode';

export const Header = () => {
  return (
    <header className='header'>
      <div className='header__layout'>
        <h1
          className='header__title' 
        >
          TODO
        </h1>

        <ToggleDarkMode/>
      </div>
    </header>
  );
};
