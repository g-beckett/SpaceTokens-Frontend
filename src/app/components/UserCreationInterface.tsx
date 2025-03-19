"use client"; 
import React, { useState } from 'react';
import Head from 'next/head';
import ApiService from '../apiService';


export default function UserCreationForm(): React.ReactNode {

  const [formData, setFormData] = useState ({
      id: [],
      firstName: '',
      lastName: '',
      email: '',
      //birthday: '',
    });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

      try {
        const apiResponse = await ApiService.SubmitUserForm(formData);
        console.log(apiResponse);

      } catch (error) {          
        console.error('error:', error);
      }
    };
    
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Head> 
        <title> User Creation </title>

      </Head>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
          <form method="post" onSubmit={handleSubmit} action = "./timeline.tsx">
            <input type = "text" 
              id = "username-id" 
              name = "username" 
              placeholder = "Username"
              required /> 
            <br />
            <input type = "text" 
              name = "firstName" 
              placeholder = "First Name" 
              required />  
            <br />
            <input type = "text" 
              name = "lastName" 
              placeholder = "Last Name" 
              required />  
            <br />
            <input type = "email" 
              name = "email" 
              placeholder = "Email" 
              required />  
            <br />
            <button type = "reset"> Reset </button>  
            <br />
            <button type = "submit" 
              id = "mySubmit"> Create User 
            </button>  
            <br />
          </form>
          </div>
        </main>
      </div>
    ); 
  };