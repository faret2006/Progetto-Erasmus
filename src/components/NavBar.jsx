import React from "react";
import { useState } from "react";

import { Icon } from "@iconify/react";
import { ReactComponent as InboxIcon } from "../icons/inbox.svg";
import { ReactComponent as MoonIcon } from "../icons/moon.svg";
import { ReactComponent as SunIcon } from "../icons/sun.svg";

import notificationsData from "../data/notificationsData.js";
import userData from "../data/userData.js";

import GlobalSearch from "./GlobalSearch";
import WindowNotification from "./WindowNotification";
import WindowUserCard from "./WindowUserCard";
import WindowOnlineUsers from "./WindowOnlineUsers";
import ProfilePic from "../assets/profile-pics/User0.png";
import { useStateContext } from '../contexts/ContextProvider';
import UserCard from "./UserCard.jsx";





const FixedButton = ({ toggleMobileSidebar }) => (
  <div className="transition-all shrink-0 duration-500 text-dark-green-500 bg-gray-900 dark:bg-gray-900 hover:bg-dark-green-500 items-center justify-center flex rounded-md size-8 md:size-10 p-2 md:hidden">
    <button
      type="button"
      onClick={toggleMobileSidebar}
      className="relative text-gray-50 hover:text-light-dark-green-500">
      <Icon className="text-current size-full" icon="ri:menu-fill" />
    </button>
  </div>
);

const NavBar = ({ toggleMobileSidebar }) => {
  const [notifications, setNotifications] = useState(notificationsData);
  const [users, setUsers] = useState(userData);
  const onlineUsers = users.filter((user) => user.online);

  const [isNotificationWindowVisible, setNotificationBarVisible] = useState(false);
  const [isUserCardWindowVisible, setUserCardVisible] = useState(false);
  const [isOnlineUsersWindowVisible, setOnlineUsersWindowVisible] = useState(false);
  const [isSearchWindowVisible, setSearchWindowVisible] = useState(false);

  const { userProfile, toggleDarkMode } = useStateContext();

  function toggleNotificationWindow() {
    if (isNotificationWindowVisible) {
      setNotificationBarVisible(false);
    } else {
      setNotificationBarVisible(true);
    }
  }
  function toggleSearchWindow() {
    if (isSearchWindowVisible) {
      setSearchWindowVisible(false);
    } else {
      setSearchWindowVisible(true);
    }
  }

  function toggleUserWindow() {
    if (isUserCardWindowVisible) {
      setUserCardVisible(false);
    } else {
      setUserCardVisible(true);
    }
  }

  function toggleOnlineUsersWindow() {
    if (isOnlineUsersWindowVisible) {
      setOnlineUsersWindowVisible(false);
    } else {
      setOnlineUsersWindowVisible(true);
    }
  }

  const clearNotifications = () => {
    setNotifications([]);
  };

  const removeNotification = (id) => {
    setNotifications(
      notifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <nav className="h-14 flex justify-between space-x-2 items-center px-2 md:pr-4">
      <div className="flex flex-row space-x-2">
      <FixedButton toggleMobileSidebar={toggleMobileSidebar} />
      <GlobalSearch isSearchWindowVisible={isSearchWindowVisible} toggleSearchWindow={toggleSearchWindow} />
      </div>
      <div className="flex space-x-2 shrink-0 md:space-x-4 items-center ">
        
        <div className="sm:relative">
            <button className={`relative size-8 md:size-10 p-0.5 sm:p-2 rounded-full after:content-[''] after:transition-colors after:-inset-1 after:rounded-full after:z-0 after:hover:bg-gray-100 dark:after:hover:bg-gray-800 after:absolute dark:text-gray-100 after:hover:text-dark-green-500 transition-colors items-center justify-center flex`}
              onClick={toggleDarkMode}>
              {userProfile.darkMode
                ? <MoonIcon className="size-full z-10" />
                : <SunIcon className="size-full z-10" />
              }
            </button> 
        </div>

        <div className="sm:relative"> {/* Notification Center */}
          <WindowNotification
            toggleNotificationWindow={toggleNotificationWindow}
            isVisible={isNotificationWindowVisible}
            notifications={notifications}
            clearNotifications={clearNotifications}
            removeNotification={removeNotification}
            setNotifications={setNotifications}
          />
          <button
            className={`${
              isNotificationWindowVisible
                ? "text-dark-green-600 dark:text-dark-green-500 after:bg-gray-100 after:dark:bg-gray-800"
                : "text-gray-950 dark:text-gray-50"
            } relative size-8 md:size-10 p-0.5 sm:p-2 rounded-full after:content-[''] after:transition-colors after:-inset-1 after:rounded-full after:z-0 after:hover:bg-gray-100 dark:after:hover:bg-gray-800 after:absolute hover:text-dark-green-500 transition-colors items-center justify-center flex`}
            onClick={toggleNotificationWindow}>
            <InboxIcon className="size-full z-10" />
            {notifications.length > 0 && (
              <span className="absolute z-10 -top-1 sm:top-1 -right-1 sm:right-1 w-4 h-4 bg-red-500 text-xs text-gray-50 dark:text-gray-900 rounded-full flex items-center justify-center">
                {notifications.length}
              </span>
            )}
          </button>
        </div>
        <div className="sm:relative">
          <WindowOnlineUsers
            onlineUsers={onlineUsers}
            isVisible={isOnlineUsersWindowVisible}
            toggleOnlineUsersWindow={toggleOnlineUsersWindow}
          />
          <button
            onClick={toggleOnlineUsersWindow}
            className={`${
              isOnlineUsersWindowVisible ? "after:bg-gray-100 after:dark:bg-gray-800" : ""
            } relative after:content-[''] after:transition-colors md:pl-2 after:-inset-1 after:rounded-full after:hover:bg-gray-100 dark:after:hover:bg-gray-800 after:absolute flex flex-row  items-center justify-center sm:space-x-2 w-auto h-8 md:h-10`}>
            <div className="flex flex-row space-x-2 ">
              <span className="hidden sm:block relative z-10 w-3 h-3 bg-green-500  rounded-full"></span>
              <span className="absolute sm:relative z-10  font-medium w-4 sm:w-auto -top-1 sm:top-0 -right-1 sm:right-0 uppercase p-1 sm:p-0 rounded-full sm:rounded-none h-4 sm:h-3 bg-green-500 sm:bg-transparent text-white sm:text-green-600 text-xs flex items-center justify-center">
                {onlineUsers.length} 
                <span className="hidden ml-0.5 sm:block">
                  Users
                  </span>
              </span>
            </div>
            <div className="flex flex-row h-8 md:h-10">
              {onlineUsers.slice(0, 3).map((user, index) => (
                <img
                  key={index}
                  className={`size-8 md:size-10 object-cover not-first:hidden sm:not-first:block rounded-3xl`}
                  style={{ zIndex: onlineUsers.length - index }}
                  src={user.icon}
                  alt={"Icon"}
                />
              ))}
            </div>
          </button>
        </div>
        <span className="w-px h-6 bg-gray-300 dark:bg-gray-700"></span>
        <div className="sm:relative"> {/* Profile icon */}
          <WindowUserCard
            isVisible={isUserCardWindowVisible}
            toggleUserWindow={toggleUserWindow}
          />

          <button 
            className={`size-8 relative md:size-10 rounded-full items-center justify-center flex
            ${
              isUserCardWindowVisible
                ? " after:bg-gray-100 after:dark:bg-gray-800"
                : "" 
            } after:content-[''] after:transition-colors after:-inset-1 after:rounded-full after:z-0 after:hover:bg-gray-100 dark:after:hover:bg-gray-800 after:absolute`}
            onClick={toggleUserWindow}>
            <img
              className="size-full z-10 rounded-full object-cover  transition-all"
              src={ProfilePic}
              alt={"Icon"} />
          </button>

        </div>
      </div>
    </nav>
  );
};

export default NavBar;
