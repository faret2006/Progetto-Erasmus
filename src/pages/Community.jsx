import React from "react";
import { ReactComponent as AddIcon } from "../icons/plus.svg";
import Card from "../components/CommunityCard"
import { Icon } from "@iconify/react";

const Community = () => {
    return(
        <div className="max-h-[550px]">
            <div>
                <h1 className="dark:text-white">Community</h1>
                <div>
                    <button className="absolute top-20 right-5 rounded-md text-dark-green-500 hover:transition-colors
                        hover:text-white hover:bg-dark-green-500 bg-gray-200 
                        hover:dark:text-white dark:bg-gray-900 ">
                        <Icon 
                            className="size-full p-1.5 text-current"
                            icon="fluent:add-12-filled"/> 
                    </button>
                </div>
            </div>
            <div className="flex">
                <Card></Card>
            </div>
        </div>
    ); 
}

export default Community;