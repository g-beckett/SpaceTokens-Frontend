'use client'
import React, { useState } from 'react';
import createUser from '../apiService';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const UserCreationForm: React.FC = () =>  {
  const router = useRouter();

  const [userData, setUserData] = useState({
      //id: [],  
      username: '',
      firstName: '', 
      lastName: '',
      email: '',
      password: '',
    //birthday: '',
    })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await createUser(userData);
      console.log('yayyyy:', response);

      router.push('{{hostname}}/space-tokens/api/v1/timeline/{{username}}');

    } catch (error) {
      console.error('lol try again:', error);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [event.target.name]: event.target.value });
  };

  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
      <body>
        <h1> user creation </h1>
        <p> 
          <Link href = '/timeline'>
            <button style={{ marginTop: '10px' }}>
              go to timeline
            </button>
          </Link>
        </p>
        <div>
          <form method = "post" onSubmit={handleSubmit} onClick={() => alert('user created')} >
            <label htmlFor = "username"> username :  </label>
            <input type = "text" 
              id = "username-id" 
              name = "username" 
              placeholder = "username" 
              value = {userData.username}
              onChange = {handleChange}
              required />
            <br />
            <label htmlFor = "password"> password :  </label>
            <input type = "password" 
              id = "password" 
              name = "password" 
              placeholder = "password" 
              value = {userData.password}
              onChange = {handleChange}
              required />
            <br />
            <label htmlFor = "firstName"> First Name :  </label>
            <input type = "text" 
              name = "firstName" 
              placeholder = "first name"
              value = {userData.firstName}
              onChange = {handleChange} 
              required /> 
            <br />
            <label htmlFor = "lastName"> Last Name :  </label>
            <input type = "text" 
              name = "lastName" 
              placeholder = "last name" 
              value = {userData.lastName}
              onChange = {handleChange}
              required /> 
            <br />
            <label htmlFor = "email"> email :  </label>
            <input type = "email" 
              name = "email" 
              placeholder = "email" 
              value = {userData.email}
              onChange = {handleChange}
              required /> 
            <br />

            <button type = "reset"> Reset </button>
            <br />
            <button type = "submit"  id = "mySubmit" > Create User </button>
          </form>
        </div>
      </body>
      {/* </main> */}
    </div>
  ); 
}
export default UserCreationForm;