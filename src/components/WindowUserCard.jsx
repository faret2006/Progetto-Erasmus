import React from "react";
import FloatingRelativeWindow from "./FloatingRelativeWindow";
import { NavLink } from "react-router-dom";
import ProfilePic from "../assets/profile-pics/User0.png";
import { Icon } from "@iconify/react";
import { ReactComponent as ProfileIcon } from "../icons/profile.svg";
import { ReactComponent as AccountIcon } from "../icons/account.svg";
import { ReactComponent as HelpIcon } from "../icons/help.svg";
import { ReactComponent as FeedbackIcon } from "../icons/feedback.svg";
import { ReactComponent as CommunityIcon } from "../icons/community.svg";
import { ReactComponent as LogoutIcon } from "../icons/logout.svg";
import { ReactComponent as BadgeIcon } from "../icons/badge.svg";

const WindowUserCard = ({ isVisible, toggleUserWindow }) => {
  const content = (
    <div className="flex flex-col space-y-4 p-4 md:p-6">
      <div className="flex flex-row space-x-2">
        <img className="size-14" src={ProfilePic} />
        <div className="flex flex-col w-full">
          <span className="text-lg font-semibold">Jhon doe</span>
          <span className="text-xs text-gray-400 dark:text-gray-300">Water Supply Engineer</span>
          <a className="text-[0.6rem] text-blue-500 dark:text-blue-400" href="#">
            deljimen456@domain.com
          </a>
        </div>
        <div className="flex flex-col ml-auto w-fit justify-center items-center space-y-2">
          <BadgeIcon className="size-6" />
          <span className="text-xs whitespace-nowrap text-blue-500 dark:text-blue-400">231 logros</span>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 grid-rows-2">
        <div className="flex flex-col justify-center space-y-2 items-center">
          <NavLink
            to="/login"
            >
            <AccountIcon className="rounded-full dark:bg-gray-950 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors p-2.5 size-12" />
          </NavLink>
          <span className="text-xs text-center">Account</span>
        </div>

        <div className="flex flex-col justify-center space-y-2 items-center">
          <NavLink
            to="/settings"
            >
            <ProfileIcon className="rounded-full dark:bg-gray-950 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors p-2.5 size-12" />
          </NavLink>
          <span className="text-xs text-center">Profile</span>
        </div>

        <div className="flex flex-col justify-center space-y-2 items-center">
          <NavLink
            to="/help"
            >
            <HelpIcon className="rounded-full dark:bg-gray-950 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors p-2.5 size-12" />
          </NavLink>
          <span className="text-xs text-center">Help</span>
        </div>

        <div className="flex flex-col justify-center space-y-2 items-center">
          <NavLink
            to="/feedback"
            >
            <FeedbackIcon className="rounded-full dark:bg-gray-950 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors p-2.5 size-12" />
          </NavLink>
          <span className="text-xs text-center">Feedback</span>
        </div>

        <div className="flex flex-col justify-center space-y-2 items-center">
          <NavLink
            to="/community"
            >
            <CommunityIcon className="rounded-full dark:bg-gray-950 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors p-2.5 size-12" />
          </NavLink>
          <span className="text-xs text-center">Community</span>
        </div>

        <div className="flex flex-col justify-center space-y-2 items-center">
          <NavLink
            to="/logout"
            >
            <LogoutIcon className="rounded-full dark:bg-gray-950 bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors p-2.5 size-12" />
          </NavLink>
          <span className="text-xs text-center">Logout</span>

        </div>
      </div>
    </div>
  );

  return (
    <FloatingRelativeWindow
      toggleWindow={toggleUserWindow}
      isVisible={isVisible}
      className="overflow-clip max-h-96 p-0 md:right-0 right-2 top-14"
      content={content}
    />
  );
};

export default WindowUserCard;
