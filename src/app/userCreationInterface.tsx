'use client'
import React, { useState } from 'react';
import  createUser from './apiService';
import Head from 'next/head';
import { useRouter } from 'next/navigation';

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
      <Head> 
        <title> User Creation </title>
      </Head>
      <section>
        <div>
          <form method = "post" onSubmit={handleSubmit} >
            <input type = "text" 
              id = "username-id" 
              name = "username" 
              placeholder = "Username" 
              value = {userData.username}
              onChange = {handleChange}
              required />
            <br />
            <input type = "password" 
              id = "password" 
              name = "password" 
              placeholder = "Password" 
              value = {userData.password}
              onChange = {handleChange}
              required />
            <br />
            <input type = "text" 
              name = "firstName" 
              placeholder = "First Name"
              value = {userData.firstName}
              onChange = {handleChange} 
              required /> 
            <br />
            <input type = "text" 
              name = "lastName" 
              placeholder = "Last Name" 
              value = {userData.lastName}
              onChange = {handleChange}
              required /> 
            <br />
            <input type = "email" 
              name = "email" 
              placeholder = "Email" 
              value = {userData.email}
              onChange = {handleChange}
              required /> 
            <br />

            <button type = "reset"> Reset </button>
            <br />
            <button type = "submit"  id = "mySubmit" > Create User </button>
          </form>
        </div>
      </section>
      {/* </main> */}
    </div>
  ); 
}
export default UserCreationForm;