// import React from "react";
// import { useState } from "react";
// import { useContext } from "react";
// import { useStateContext } from '../contexts/ContextProvider';

// const SingUpFrame = () => {

//   const { user, updateUser } = useStateContext();
//   const [formData, setFormData] = useState({
//     newFirstName: '',
//     newLastName: '',
//     newUsername: '',
//     newEmail: '',
//     newProfession: '',
//     newPassword: ''
//   });
  
//   const handleSubmit = e => {
//     e.preventDefault();
//     updateUser({
//       firstname: formData.newFirstName,
//       lastname: formData.newLastName,
//       username: formData.newUsername,
//       email: formData.newEmail,
//       profession: formData.newProfession,
//       password: formData.newPassword
//     });
//     console.log(formData)
//     setFormData({ 
//       newFirstName: '',
//       newLastName: '',
//       newUsername: '',
//       newEmail: '',
//       newProfession: '', 
//       newPassword: '' });

//   };

//   const handleChange = e => {
//     const { name, value } = e.target;
//     setFormData(prevState => ({ ...prevState, [name]: value }));
//   };

//     return(
//         <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg ml-4 dark:bg-gray-950 ">
//         <h4 className="text-2xl font-bold mb-4 dark:text-white" >Sign Up</h4>




//         <form onSubmit={handleSubmit}>
//           <div className="relative mb-3 ">
//             <span>
//               <input className="mr-16 p-2 w-5/12 border rounded-md dark:bg-gray-950 dark:text-white" 
//                 type="text" 
//                 name="newFirstName"
//                 id="firstname" 
//                 value={formData.newFirstName}
//                 onChange={handleChange} />
//               <label htmlFor="firstname" className="absolute text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Firstname</label>
//             </span>
//             <span>
//               <input className="p-2 w-5/12 left-auto border rounded-md dark:bg-gray-950 dark:text-white" 
//                 type="text" 
//                 name="newLastName"
//                 id="lastname"
//                 value={formData.newLastName}
//                 onChange={handleChange}  />
//               <label htmlFor="lastname" className="fixed text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Lastname</label>
//             </span>
//           </div>

//           <div className="relative mb-3">
//             <input className=" p-2 w-full border rounded-md dark:bg-gray-950 dark:text-white" 
//               type="text" 
//               name="newUsername"
//               id="username"
//               value={formData.newUsername}
//               onChange={handleChange}  />
//             <label htmlFor="username" className="absolute text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Username</label>
//           </div>
//           <div className="relative mb-3">
//           <input className=" p-2 w-full border rounded-md dark:bg-gray-950 dark:text-white" 
//               type="text" 
//               name="newEmail"
//               id="E-mail" 
//               value={formData.newEmail}
//               onChange={handleChange} />
//                 <label htmlFor="E-mail" className="absolute text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">E-mail</label>
//           </div>
//           <div className="relative mb-3">
//             <input className=" p-2 w-full border rounded-md dark:bg-gray-950 dark:text-white" 
//               type="text" 
//               name="newProfession"
//               id="profession"
//               value={formData.newProfession}
//               onChange={handleChange} />
//             <label htmlFor="profession" className="absolute text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">profession</label>
//           </div>
//           <div className="relative mb-3">
//           <input className=" p-2 w-full border rounded-md dark:bg-gray-950 dark:text-white" 
//               type="password" 
//               name="newPassword"
//               id="Password"
//               value={formData.newPassword}
//               onChange={handleChange} />
//                 <label htmlFor="Password" className="absolute text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">Password</label>
//           </div>
//           <button type="submit" className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600">Sign Up</button>
//         </form>
//       </div>
//     );
// }

// export default SingUpFrame




import React, { useState } from "react";
import { useContext } from "react";
import { useStateContext } from '../contexts/ContextProvider';
import { type } from "@testing-library/user-event/dist/type";

const SignUpFrame = () => {
  const { user, updateUser } = useStateContext();
  const [formData, setFormData] = useState({
    newFirstName: '',
    newLastName: '',
    newUsername: '',
    newEmail: '',
    newProfession: '',
    newPassword: '',
  });
  
  const placeHolders = [
    "FirstName",
    "LastName",
    "Username",
    "Email",
    "Profession",
    "Password"
  ];

  const fieldNames = [
    "newFirstName",
    "newLastName",
    "newUsername",
    "newEmail",
    "newProfession",
    "newPassword"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({
      firstname: formData.newFirstName,
      lastname: formData.newLastName,
      username: formData.newUsername,
      email: formData.newEmail,
      profession: formData.newProfession,
      password: formData.newPassword
     });
    setFormData({
      newFirstName: '',
      newLastName: '',
      newUsername: '',
      newEmail: '',
      newProfession: '',
      newPassword: '',
    });
  };

  return (
    <div className="max-w-md w-full bg-white p-8 shadow-lg rounded-lg ml-4 dark:bg-gray-950">
      <h4 className="text-2xl font-bold mb-4 dark:text-white">Sign Up</h4>

      <form onSubmit={handleSubmit}>
        {fieldNames.map((fieldName, index) => (
          <div key={fieldName} className="relative mb-3">
            <input
              className="mr-16 p-2 w-full border rounded-md dark:bg-gray-950 dark:text-white"
              type= {fieldName === 'newPassword' ? 'password' : 'text'}     
              name={fieldName}
              id={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
            />
            <label
              htmlFor={fieldName}
              className="absolute text-sm text-gray-500 dark:bg-gray-950 dark:text-white transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-dark-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75  peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            >
              {placeHolders[index].charAt(0).toUpperCase() + placeHolders[index].slice(1)}
            </label>
          </div>
        ))}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:bg-green-600"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUpFrame;
