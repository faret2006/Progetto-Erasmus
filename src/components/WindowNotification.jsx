import React, { useState } from "react";
import FloatingRelativeWindow from "./FloatingRelativeWindow";
import { ReactComponent as NotificationIcon } from "../icons/reminder.svg";
import { ReactComponent as MessageIcon } from "../icons/messages.svg";
import { ReactComponent as AlertIcon } from "../icons/alert-triangle.svg";
import { ReactComponent as TrashIcon } from "../icons/trash.svg";
import { NavLink } from "react-router-dom";

const WindowNotification = ({
  isVisible,
  toggleNotificationWindow,
  notifications,
  clearNotifications,
  removeNotification,
  setNotifications,
}) => {
  const [hoveredId, setHoveredId] = useState(null);

  // const [notifications, setNotifications] = useState(notificationsData, setNotifications);
  
  const formatTime = (time) => {
    const currentTime = new Date();
    const notificationTime = new Date(time);

    if (
      notificationTime.getDate() === currentTime.getDate() &&
      notificationTime.getMonth() === currentTime.getMonth() &&
      notificationTime.getFullYear() === currentTime.getFullYear()
    ) {
      // Today
      return notificationTime.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    } else if (
      notificationTime.getDate() === currentTime.getDate() - 1 &&
      notificationTime.getMonth() === currentTime.getMonth() &&
      notificationTime.getFullYear() === currentTime.getFullYear()
    ) {
      // Yesterday
      return "Yesterday";
    } else if (
      notificationTime.getMonth() === currentTime.getMonth() - 1 &&
      notificationTime.getFullYear() === currentTime.getFullYear()
    ) {
      // X months ago
      const diffMonths = currentTime.getMonth() - notificationTime.getMonth();
      return `${diffMonths} months`;
    } else {
      // X days ago
      const diffTime = Math.abs(currentTime - notificationTime);
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return `${diffDays} days ago`;
    }
  };

  // const clearNotifications = () => {
  //   setNotifications([]);
  // };

  // const removeNotification = (id) => {
  //   setNotifications(
  //     notifications.filter((notification) => notification.id !== id)
  //   );
  // };


  const content = (
    <div className="flex flex-col overflow-y-auto transition-all duration-500">
      <div className="flex w-full flex-col divide-y dark:divide-gray-600 ">
        {notifications.length === 0 && (
          <div className="p-3 md:p-6  justify-center flex text-gray-700 dark:text-gray-200 uppercase  text-sm">
            <span className="text-center">No new Notifications</span>
            {/* <NavLink
              to="/notifications"
              className="hover:text-dark-green-500  text-gray-500 font-bold uppercase text-sm "
            >
              see all
            </NavLink> */}
          </div>
        )}
        {notifications
          .sort((a, b) => new Date(b.time) - new Date(a.time))
          .slice(0, 4)
          .map((notification) => (
            <div
              className=" flex w-full hover:bg-gray-50 dark:hover:bg-gray-950  transition-colors px-4 py-3 md:px-6 md:py-4 flex-row items-center space-x-2"
              key={notification.id}
            >
              <div className="flex justify-center w-10 items-center">
                {notification.type === "new-message" && (
                  <MessageIcon className="size-7" />
                )}
                {notification.type === "reminder" && (
                  <NotificationIcon className="size-8" />
                )}
                {notification.type === "alert" && (
                  <AlertIcon className="size-7" />
                )}
              </div>
              <div className="flex flex-col w-[calc(100%_-_7.5rem)]">
                <h6 className="text-base font-semibold">
                  {notification.title}
                </h6>
                <p className="text-sm text-gray-400 dark:text-gray-300 truncate">
                  {notification.text}
                </p>
              </div>
              <div
                onMouseEnter={() => setHoveredId(notification.id)}
                onMouseLeave={() => setHoveredId(null)}
                className=" relative flex items-center justify-end w-20 h-10 text-right text-xs text-gray-700 dark:text-gray-400"
              >
                <span>{formatTime(notification.time)}</span>
                {hoveredId === notification.id && (
                  <div
                    className=" z-10 top-0 absolute h-full flex items-center justify-end w-20 bg-gradient-to-l from-gray-50 dark:from-gray-950 to-transparent right-0"
                    aria-label={`Remove notification ${notification.title}`}
                  >
                    <button
                    onClick={() => removeNotification(notification.id)}
                  >
                    <TrashIcon className="size-5 ml-auto hover:text-red-600 dark:hover:text-red-700" />
                  </button>
                  </div>
                )}
              </div>
            </div>
          ))}
      </div>
      {/* {notifications.length > 4 && ( */}
        <div className="flex justify-between p-4 md:p-6 md:py-4">
          <button
            onClick={clearNotifications}
            disabled={notifications.length === 0}
            className="font-bold uppercase text-sm text-red-500 disabled:text-gray-200 dark:disabled:text-gray-700 hover:text-red-700">
            Clear All
          </button>
          <NavLink
            to="/notifications"
            className="hover:text-dark-green-500  text-gray-500 dark:text-gray-300 font-bold uppercase text-sm ">
            see all
          </NavLink>
        </div>
      {/* )} */}
    </div>
  );

  return (
    <FloatingRelativeWindow
      toggleWindow={toggleNotificationWindow}
      isVisible={isVisible}
      className="overflow-clip max-h-96 p-0 md:right-0 right-2 top-14"
      content={content}
    />
  );
};

export default WindowNotification;
