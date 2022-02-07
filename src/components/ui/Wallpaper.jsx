import React from 'react';
import desktopNightImg from "/assets/images/bg-desktop-dark.jpg"
import desktopDayImg from "/assets/images/bg-desktop-light.jpg"

import mobileDayImg from "/assets/images/bg-mobile-light.jpg"
import mobileNightImg from "/assets/images/bg-mobile-dark.jpg"

export const Wallpaper = () => {
  return (
    <>
      <picture className='night' role="Wallpaper nocturno">
        <source media='(min-width: 640px)' srcSet={desktopNightImg} />
        <img src={mobileNightImg} alt='Hero image' />
      </picture>
      <picture className='day' role="Wallpeper de día">
        <source media='(min-width: 640px)' srcSet={desktopDayImg} />
        <img src={mobileDayImg} alt='Hero image' />
      </picture>
    </>
  );
};
