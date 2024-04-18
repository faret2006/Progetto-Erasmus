import React from 'react'
import { useStateContext } from '../contexts/ContextProvider';

const DarkModeSwitch = () => {
  const { userProfile, toggleDarkMode } = useStateContext();

  return (
      <button onClick={toggleDarkMode}>
          {userProfile.darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
  );
};


const UserProfile = () => {
  return (
    <div>UserProfile

      <div>
        <DarkModeSwitch />
      </div>
    </div>
  )
}

export default UserProfile