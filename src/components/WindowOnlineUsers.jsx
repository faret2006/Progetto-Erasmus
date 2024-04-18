import React from "react";
import FloatingRelativeWindow from "./FloatingRelativeWindow";
import { NavLink } from "react-router-dom";

const WindowOnlineUsers = ({
  isVisible,
  toggleOnlineUsersWindow,
  onlineUsers,
}) => {
  // Function to get unique teams from the online users
  const uniqueTeams = [...new Set(onlineUsers.map(user => user.team))];

  const content = (
    <div className="flex flex-col space-y-4 p-4 md:p-6">
      {uniqueTeams.map(team => (
        <div key={team} className="space-y-4">
          <span className=" text-xs uppercase text-gray-400 ">{team}</span>
          <div className="flex flex-row space-x-4">
            {onlineUsers
              .filter(user => user.team === team)
              .map((user, index) => (
                <div key={index} className="flex flex-col min-w-14 justify-center space-y-2 items-center">
                  <img
                    className="rounded-full size-12 object-cover"
                    src={user.icon}
                    alt={user.name}
                  />
                  <span className="text-xs text-gray-800 dark:text-gray-200 text-center">{user.firstName} {user.lastName.charAt(0)}.</span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <FloatingRelativeWindow
      toggleWindow={toggleOnlineUsersWindow}
      isVisible={isVisible}
      className="overflow-clip max-h-96 p-0 md:right-0 right-2 top-14"
      content={content}
    />
  );
};

export default WindowOnlineUsers;
