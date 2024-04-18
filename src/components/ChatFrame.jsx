import React, { useState, useEffect } from "react";
import { MessageBox } from "react-chat-elements";
import 'react-chat-elements/dist/main.css'

const ChatFrame = ({ activeChat }) => {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);
  const isMobile = window.matchMedia('(max-width: 768px)').matches;

  useEffect(() => {
    const savedMessages = localStorage.getItem(`chat_${activeChat.id}_messages`);
    if (savedMessages) {
      setMessages(JSON.parse(savedMessages));
    }
  }, [activeChat]);

  const handleInputChange = (event) => {
    setInputText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (inputText.trim() !== '') {
      const newMessage = {
        text: inputText,
        timestamp: new Date().toISOString(),
        id: activeChat.id
      };
      const updatedMessages = [...messages, newMessage];
      setMessages(updatedMessages);
      setInputText('');

      localStorage.setItem(`chat_${activeChat.id}_messages`, JSON.stringify(updatedMessages));
    }
  };

  return (

    <div>
    { isMobile 
      ? <div className="bg-white dark:bg-gray-950 shadow-md">  
          <div className="p-4 dark:text-white">
            <div className="flex items-center">
              <img src={activeChat.icon} alt="" className="w-10 h-10 rounded-full mr-2" />
              <div className='w-8/12 dark:text-white'>
                {activeChat.online 
                  ? <div className='relative bottom-1 right-5 rounded-full bg-green-400 w-2.5 h-2.5'/>  
                  : <div className='relative bottom-1 right-5 rounded-full bg-red-400 w-3 h-3' />              
                }
                <h4 className='-mt-2'>{activeChat.firstName} {activeChat.lastName}</h4>
              </div>
            </div>
          </div>          
          
          <div> 
          {/* Chat Messages */}          
          <div className='relative bg-white w-full text-black dark:text-white overflow-y-auto' style={{maxHeight: '430px', height: '430px'}}>
              {messages.map((message, index) => (
                  <div>
                      {message.id === activeChat.id 
                          ? <MessageBox
                              className='dark:text-black'
                              key={index}
                              position='right'
                              type='text'
                              text={message.text}
                              date={message.timestamp}/>
                          : ''
                      }
                  </div>
              ))}
          </div> 
          </div>
          
          <form onSubmit={handleSubmit} className="absolute bottom-4 w-11/12 bg-white dark:bg-gray-950 dark:text-white p-2 shadow-md">
            <div className="flex items-center">
              <input
                className="flex-1 p-2 rounded-md border dark:bg-gray-950"
                type="text"
                placeholder="Your Message"
                value={inputText}
                onChange={handleInputChange}
              />
              <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
                Send
              </button>
            </div>
          </form>

        </div>
      : ''
    }

      <div className="hidden sm:block relative flex flex-col h-full">
          {/* Top Bar */}
          <div className="p-4 bg-white dark:bg-gray-950 dark:text-white">
              <div className="flex items-center">
                  <img src={activeChat.icon} alt="" className="w-10 h-10 rounded-full mr-2" />
                  {/* <h4 className="text-lg font-bold">{activeChat.firstName} {activeChat.lastName}</h4> */}
                  <div className='w-8/12 dark:text-white'>
                      <h4 className='mt-2'>{activeChat.firstName} {activeChat.lastName}</h4>
                      {activeChat.online 
                          ? <div className='absolute text-green-500' >Online</div>  
                          : <div className='absolute text-red-500' >Offline</div> }
                  </div>
              </div>
          </div>

          {/* Chat Messages */}          
          <div className='relative w-full text-black dark:text-white overflow-y-auto' style={{maxHeight: '430px', height: '430px'}}> {/*chat frame */}
              {messages.map((message, index) => (
                  <div>
                      {message.id === activeChat.id 
                          ? <MessageBox
                              className='dark:text-black'
                              key={index}
                              position='right'
                              type='text'
                              text={message.text}
                              date={message.timestamp}/>
                          : ''
                      }
                  </div>
              ))}
          </div> 

        {/* Message Input */}
        <form onSubmit={handleSubmit} className="absolute top-auto w-11/12 left-10 bg-white dark:bg-gray-950 dark:text-white">
          <div className="flex items-center">
            <input
              className="flex-1 p-2 rounded-md border dark:bg-gray-950"
              type="text"
              placeholder="Your Message"
              value={inputText}
              onChange={handleInputChange}
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded-md">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatFrame;
