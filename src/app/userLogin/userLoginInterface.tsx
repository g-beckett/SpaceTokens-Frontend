'use client'
import React, { useState } from 'react';
import {  loginUser } from '../apiService';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../globals.css';


const UserLoginForm: React.FC = () =>  {
  const router = useRouter();

  const [loginData, setLoginData] =  useState({
    username: '',
    password: '',
  });

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const response = await loginUser(loginData);
      console.log('Login successful: ', response);

      router.push('http://localhost:8080/space-tokens/api/v1/timeline/${loginData.username}');
    
    } catch (error) {
      console.error('Login failed: ', error);
    }
  };

  const handleLoginChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  return(

    <div className = "container mx-auto px-4 h-full">
      <div className = "flex content-center items-center justify-center h-full">
        <div className = "w-full lg:w-4/12 px-4">
          <div className = "relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
            <div className = "rounded-t mb-0 px-6 py-6">
              <div className = "text-center mb-3">
                <h6 className = "text-blueGray-500 text-sm font-bold">
                  Sign in with
                </h6>
              </div>
              <div className = "btn-wrapper text-center">
                <button className = "bg-white active:bg-blueGray-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type = "button" >
                  <img alt = "..." 
                    className = "w-5 mr-1" 
                    src = "../logos/google.svg" />
                  Google
                </button>

                <button className = "bg-white active:bg-blueGray-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type = "button" >
                  <img alt="..." 
                    className = "w-5 mr-1" 
                    src = "../logos/microsoft.svg" />
                  Microsoft
                </button>

                <button className = "bg-white active:bg-blueGray-50 text-gray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                  type = "button" >
                  <img alt = "..." 
                    className = "w-5 mr-1" 
                    src = "../logos/apple.svg" />
                  Apple
                </button>
              </div>
              <hr className = "mt-6 border-b-1 border-blueGray-300" />
            </div>

            <div className = "flex-auto px-4 lg:px-10 py-10 pt-0">
              <div className="text-blueGray-400 text-center mb-3 font-bold">
                <small> Or sign in with credentials</small>
              </div>
              <form method = "post" onSubmit={handleLogin}>
                <div className = "relative w-full mb-3">
                  <label className = "block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor = "grid-password">
                    Username
                  </label>
                  <input type = "text"
                    id = "loginUsername"
                    name="username"
                    placeholder="username"
                    value={loginData.username}
                    onChange={handleLoginChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required />
                </div>

                <div className="relative w-full mb-3">
                  <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password" >
                    Password
                  </label>
                  <input type="password"
                    id = "loginPassword"
                    name="password"
                    placeholder="password"
                    value={loginData.username}
                    onChange={handleLoginChange}
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    required />
                </div>
                {/* <div>
                  <label className="inline-flex items-center cursor-pointer">
                    <input id="customCheckLogin"
                      type="checkbox"
                      className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150" />
                    <span className="ml-2 text-sm font-semibold text-blueGray-600">
                      Remember me
                    </span>
                  </label>
                </div> */}

                <div className="text-center mt-6">
                  <button className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type = "submit" id = "mySubmit"
                  > Sign In </button>
                </div>
              </form>
            </div>
          </div>
          <div className="flex flex-wrap mt-6 relative">
            <div className="w-1/2">
              <a href="#" //add password later on?
                onClick={(e) => e.preventDefault()}
                className="text-blueGray-200" >
                <small> Forgot password? </small>
              </a>
            </div>
            <div className="w-1/2 text-right">
              <Link href="/userCreation">
                <small> Create new account </small>
                {/* <a href="/userCreation" className="text-blueGray-200">
                  <small>Create new account</small>
                </a> */}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
//     <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
//       {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
//       <section>
//         <h1> user creation </h1>
//         <p> 
//           <Link href = '/timeline'>
//             <button style={{ marginTop: '10px' }}>
//               go to timeline
//             </button>
//             <br />
//           </Link>
//         </p>
//         <h1> Login </h1>
//         <br />
//         <div>
//           <form method="post" onSubmit={handleLogin} >
//             <label htmlFor="loginUsername"> Username : </label>
//             <input type="text"
//               id="loginUsername"
//               name="username"
//               placeholder="username"
//               value={loginData.username}
//               onChange={handleLoginChange}
//               required />
//             <br />

//             <label htmlFor="loginPassword"> Password : </label>
//             <input type="password"
//               id="loginPassword"
//               name="password"
//               placeholder="password"
//               value={loginData.password}
//               onChange={handleLoginChange}
//               required/>
//             <br />
//               <button type = "reset"> Reset </button>
//             <br />
//             <button type="submit" id="loginSubmit"  onClick={() => alert('Login attempted')} > Login </button>
//           </form>
//         </div>
//       </section>
//     </div>
//   ); 
// }
export default UserLoginForm;