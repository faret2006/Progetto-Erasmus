import React, { useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";

import { ReactComponent as ProfileIcon } from "../icons/profile.svg";
import { ReactComponent as ShowIcon } from "../icons/show.svg";

const UserCard2 = () => {
    const { userProfile } = useStateContext();
    const [showText, setShowText] = useState(false);

    const handleClick = () => {
      setShowText(!showText); // Cambia lo stato quando viene cliccato il pulsante
    };
    
    return (
        <div className="w-fit shadow-sm mt-10 rounded-md bg-white dark:bg-gray-950">
            <div className="flex">
                <div className="rounded-full bg-gray-200 my-6 mx-4  ">
                    <ProfileIcon className="p-3.5 size-16" />
                </div>
                <div className="mt-5 w-fit mr-5">
                    <h6 className="dark:text-white">{ userProfile.firstname +" " +userProfile.lastname }</h6>
                    <p className="font-light text-sm dark:text-white">{ userProfile.profession }</p>
                    <p className="dark:text-white">{ userProfile.email }</p>
                </div>
            </div>
            <div>
                <div className="ml-12 w-2/3 flex">
                    <p className="text-xs dark:text-white text-left">Username:</p>
                    <p className="dark:text-white w-full rounded-md ml-2">{ userProfile.username }</p>
                </div>
                <hr className="text-white ml-12 w-1/3 mt-2"/>
                <div className="ml-12 my-2 w-2/3 flex">
                    <p className="text-xs dark:text-white text-left">Password:</p>
                    <p className="dark:text-white w-full rounded-md ml-3">
                        {showText 
                            ? userProfile.password
                            : '******'
                        }
                    </p>
                    <button onClick={handleClick} className="dark:text-white"><ShowIcon /></button>
                </div>
                <hr className="text-xs ml-12 w-1/3 mt-2 mb-10"/>
                <p className="h-px  "></p>
            </div>
        </div>
    );
}

export default UserCard2;