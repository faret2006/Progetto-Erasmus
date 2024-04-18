import React from "react";
import { useState } from "react";
import { useStateContext } from '../contexts/ContextProvider';
import { ReactComponent as ProfileIcon } from "../icons/profile.svg";

const UserCard = () => {

    const { userProfile } = useStateContext();

    return(
        <div className="w-fit h-fit">
            <div className='flex bg-blue-500 rounded-md w-full h-16'>
            </div>
            <div className="flex -my-6 grid w-full shadow-sm bg-white dark:bg-gray-950 justify-center items-center rounded-md">
                <div className="-mt-6 ml-20 rounded-full bg-gray-200 w-20 h-20">
                    <div className="flex">
                        <ProfileIcon className="p-3.5 size-20" />
                    </div>
                </div>
                <h6 className="text-center dark:text-white">{ userProfile.firstname +" " +userProfile.lastname }</h6>
                <p className="text-center dark:text-white">{userProfile.profession}</p>
                <p className="text-center font-extralight dark:text-white top-auto">{ userProfile.email }</p>
                <div className="flex mx-5 my-5">
                    <button className="grid place-items-center h-8 w-24 rounded-md bg-gray-200 mt-3.5 text-center dark:bg-gray-200 dark:text-black">Edit Profile</button>
                    <button className="grid place-items-center h-8 w-24 ml-5 rounded-md bg-gray-200 mt-3.5 text-center dark:bg-gray-200 dark:text-black">Log Out</button>
                </div>
            </div>
        </div>
    );
}

export default UserCard;