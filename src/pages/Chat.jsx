// //Chat.jsx
import React, { useState } from 'react';
import userData from '../data/userData.js';
import ChatFrame from '../components/ChatFrame';
import ContactChat from '../components/ContactChat';
import '../helpers/scrollBar_Chat.css'

function Chat() { 
  const [activeContact, setActiveContact] = useState("");
  const isMobile = window.matchMedia('(max-width: 767px)').matches;

  const handleChatClick = (selectedUserId, contactClicked) => {
    setActiveContact(contactClicked);
    console.log("contactID: ", activeContact.id);
  };

  return (
    <div>
      {(activeContact.id === undefined || activeContact.id === 0) && isMobile
        ? <div className="md:w-1/4 dark:border-gray-800 dark:bg-gray-950 bg-white overflow-y-auto border-gray-200 ">
            <div className="p-4 overflow-hidden">
              <p className="text-left mb-2 font-bold text-lg dark:text-white">Chats</p>
              <input
                className="mb-4 p-2 rounded-md w-full border dark:bg-gray-950 dark:text-white placeholder:text-center"
                type="text"
                id="search"
                placeholder="Search Chats"
              />
            </div>
            <div className='overflow-y-scroll w-full' style={{height: '450px'}}>
              {userData.map((contact) => (
                <div className="hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
                  key={contact.id}
                  onClick={() => handleChatClick(contact.id, contact)}>
                  <ContactChat userData={contact} />
                </div>
              ))}
            </div>
          </div>
        : ""
      }

      <div className="md:flex-row flex flex-col h-96px rounded-xl shadow-md">
        {/* CHAT */}
        <div className="bg-white dark:bg-gray-950 dark:text-white sm:w-full md:w-2/3 flex-grow">
          {activeContact.id !== undefined && isMobile
            ? <div className='text-right '>
                <button className='border mr-4 w-full bg-gray-300' onClick={() => handleChatClick(0, 0)}>return to contacts</button>
              </div>

            : ''
          }
          {activeContact.id !== undefined && <ChatFrame activeChat={activeContact} />}
        </div>

        <hr className='hidden sm:block w-px border-black h-full '/>

        {/* CHATLIST */}
        <div className="hidden sm:block md:w-1/4 dark:border-gray-800 dark:bg-gray-950 bg-white overflow-y-auto border-gray-200 ">
          <div className="p-4 overflow-hidden">
            <p className="text-left mb-2 font-bold text-lg dark:text-white">Chats</p>
            <input
              className="mb-4 p-2 rounded-md w-full border dark:bg-gray-950 dark:text-white placeholder:text-center"
              type="text"
              id="search"
              placeholder="Search Chats"
            />
          </div>
          <div className='overflow-y-scroll' style={{height: '450px'}}>
            {userData.map((contact) => (
              <div
                key={contact.id}
                onClick={() => handleChatClick(contact.id, contact)}
                className="hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer"
              >
                <ContactChat userData={contact} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
      
  );
}

export default Chat;

