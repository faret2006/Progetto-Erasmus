//ContactChat.jsx
import React, {useState, useEffect} from "react";
import { ChatItem } from "react-chat-elements";
import { json } from "react-router-dom";


const ContactChat = ({userData}) =>   {

  const [lastMessage, setlastMessages] = useState("");
  let lastTime = new Date(lastMessage.timestamp);
  useEffect(() => {
    const savedMessages = localStorage.getItem(`chat_${userData.id}_messages`);
    if (savedMessages) {
        const messages = JSON.parse(savedMessages);
        const str1 = messages[messages.length - 1];
        setlastMessages(str1);

    }
  },[userData]); 

    return(
      <button className=" flex p-4 cursor-pointer w-full text-left
          hover:bg-gray-200 focus:bg-gray-300 
          hover:dark:bg-gray-900 focus:dark:bg-gray-1000" >
            <img src={userData.icon} alt="Avatar" className="w-12 h-12 rounded-full" />
            {userData.online 
              ? <div className='relative bottom-0.5 right-3.5 rounded-full bg-green-400 w-2.5 h-2.5'/>  
              : <div className='relative bottom-0.5 right-3.5 rounded-full bg-red-400 w-2.5 h-2.5' /> 
            }
            <div className="w-full">
                <div className='font-bold dark:text-white'>{userData.firstName} {userData.lastName}</div>   
                <div className='dark:text-white text-right overflow-hidden'>
                  <span className="truncate overflow-hidden">
                    {lastMessage.text}
                  </span> 
                  {isNaN(lastTime) 
                    ? ""
                    : <span className="font-light text-orange-200 text-sm">{ lastTime.getHours()+ ':' +lastTime.getMinutes() }</span>
                  }
                </div>
            </div>
      </button>
    )
}

export default ContactChat  