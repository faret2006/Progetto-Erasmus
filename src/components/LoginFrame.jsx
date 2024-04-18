import React from "react";

const LoginFrame = () => {

    const handleSubmit = (event) => {
        event.preventDefault();
    };


    return(
        
      <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg dark:bg-gray-950">
      <h3 className="text-2xl font-bold mb-4 dark:text-white">Login</h3>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
            <div className="relative">
            <input className=" p-2 w-full border rounded-md dark:bg-gray-950 dark:text-white" 
                type="text" 
                id="username" 
                placeholder=" " />
              <label htmlFor="username" className="absolute text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Username</label>
            </div>
        </div>
        <div className="relative mb-3">
        <input className=" p-2 w-full border rounded-md dark:bg-gray-950 dark:text-white" 
            type="text" 
            id="password" 
            placeholder=" " />
              <label htmlFor="password" className="absolute text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
        </div>
        <button type="submit" className="mt-2 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">Login</button>
        <button className='text-blue-400 hover:underline mt-1'>Forgot Password or Username?</button>
      </form>
    </div>
    );
}

export default LoginFrame