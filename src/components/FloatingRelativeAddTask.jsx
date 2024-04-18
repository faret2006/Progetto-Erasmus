import React from 'react';
import OutsideAlerter from './OutsideAlerter';

const FloatingRelativeWindow = ({ isVisible, toggleWindow, children }) => {
  const handleClickOutside = () => {
    toggleWindow();
  };

  return ( isVisible && (
      <OutsideAlerter onClickOutside={handleClickOutside}>
        <div className="absolute flex flex-col space-y-2 shadow-xl rounded-md right-0 sm:right-0 h-auto z-20 top-10 left-2 sm:left-auto sm:w-80
            bg-white  text-black 
            dark:bg-gray-950 dark:text-white">
          {children}
        </div>
      </OutsideAlerter>
    ));
};

export default FloatingRelativeWindow;