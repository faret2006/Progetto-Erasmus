import React from 'react';
import OutsideAlerter from './OutsideAlerter';

const FloatingRelativeWindow = ({ className = '', content, isVisible, toggleWindow }) => {
  // const {setIsVisible} = useState(true);

  const handleClickOutside = () => {
    toggleWindow();
  };

  return ( isVisible && 
    <OutsideAlerter onClickOutside={handleClickOutside}>
      <div className={`absolute flex flex-col space-y-2 bg-white dark:bg-gray-900 dark:text-white text-gray-900 shadow-xl rounded-md right-0 sm:right-0 h-auto z-20 top-10 left-2 sm:left-auto  sm:w-80 ${className}`}>
        {content}
      </div>
    </OutsideAlerter>
  )
};

export default FloatingRelativeWindow;
