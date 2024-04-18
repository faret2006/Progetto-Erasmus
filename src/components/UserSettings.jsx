import React from "react";

const fields = [
    { label: "Username", id: "username", placeholder: "Enter your username" },
    { label: "Profession", id: "profession", placeholder: "Enter your profession" },
    { label: "Email", id: "email", placeholder: "Enter your email" },
    { label: "Current Password", id: "currentPassword", placeholder: "Enter your current password" },
    { label: "New Password", id: "newPassword", placeholder: "Enter your new password" },
    { label: "Confirm Password", id: "confirmPassword", placeholder: "Confirm your new password" },
];

const UserSettings = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return ( 
    <div>
      <h1 className="mb-2">User Information</h1>
      <div className="bg-white dark:bg-gray-950 flex flex-col p-4 rounded-lg shadow-sm gap-y-4">
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-x-4 w-full"
          onSubmit={handleSubmit}
        >
            {fields.map((field, index) => (
                <div key={index} className="flex flex-col gap-y-1">
                    <div className="relative">
                        <label
                            htmlFor={field.id}
                            className="relative text-xs ml-2 text-gray-500 dark:bg-gray-950 dark:text-white -translate-y-4 scale-75 top-2.5 bg-white"
                        >
                            {field.label}
                        </label>
                        <input
                            className="p-2 w-full border rounded-md dark:bg-gray-950 dark:text-white"
                            type={field.id.includes("Password") ? "password" : "text"}
                            id={field.id}
                            placeholder={field.placeholder}
                        />
                    </div>
                </div>
            ))}
            <div className="flex md:col-start-2 mt-3 gap-x-3">
                <button
                    type="submit"
                    className="flex justify-center bg-dark-green-600 hover:bg-dark-green-500 text-white px-4 py-2 rounded-md w-full"
                >
                    Save
                </button>
                <button
                    type="button"
                    className="flex justify-center bg-red-700 hover:bg-red-500 text-white px-4 py-2 rounded-md w-full"
                >
                    Discard
                </button>
            </div>
        </form>
      </div>
    </div>
  );
};

export default UserSettings;
