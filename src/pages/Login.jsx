import React, { useState } from 'react';
import { LoginFrame, SingupFrame, UserCard, UserCard2 } from '../components';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');



  return (
    <div className="justify-center items-center">
      <div className='flex justify-center items-center'>
        <div className='h-fit w-fit'>
          {/* Login Section */}
          <LoginFrame />
        </div>
        {/* Sign Up Section */}
        <SingupFrame />
      </div>
      <div className='flex'>
        <div className='flex justify-center items-center mr-8'>
          <UserCard />
        </div>
        <UserCard2 />
      </div>
    </div>

  );
}

export default Login;