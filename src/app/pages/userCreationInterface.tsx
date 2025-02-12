import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

function UserCreationInterface(){
  
  return(
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <head> 
        <title> User Creation </title>
        <script src = "app.jsx" type="module" defer></script>
      </head>
      <body>
        <div>
          <form method = "post">
            <input type = "text" id = "username-id" name = "username" placeholder = "Username" required></input>
            <input type = "text" name = "firstName" placeholder = "First Name" required> </input>
            <input type = "text" name = "lastName" placeholder = "Last Name" required> </input>
            <input type = "email" name = "email" placeholder = "Email" required> </input>
            <button type = "reset"> Reset </button>
            <button type = "submit" id = "mySubmit" formMethod="post"> Create User </button>
          </form>
          
          
          

          </div>
          
      </body>
      </main>
    </div>
  ); 
}
// document.getElementById('myForm').addEventListener('submit', function(event) {
//   event.preventDefault(); // Prevent the form from submitting normally

//   const formData = {
//       username: document.getElementById('username').value,
//       email: document.getElementById('email').value
//   };

//   // Call the backend API with the form data
//   submitFormData(formData);
// });

// import { submitFormData } from './api'; // Import the API call function
// const newUser = 'https://localhost:8080/space-tokens/api/v1/user/4'; 
//         const findUserID = 'https://localhost:8080/space-tokens/api/v1/user/new';
//         const findUserName = 'https://localhost:8080/space-tokens/api/v1/user/4';
//         const submitButton = document.getElementById('creation-user-form').addEventListener('submit', function (event) {
//             event.preventDefault(); 
//                 const [user, setUser] = userState({
//                     id: [],
//                     firstName: '',
//                     lastName: '',
//                     email: '',
//                     // birthday: '',
//                 })
//                 return <input type = "text" value =  = "username-id" name = "username" placeholder = "Username"></input>
//            
//             // post to the backend
//             // with the response, set to the variable
//             // Display the new user (or send it to a server)
//             document.getElementById('output').innerText = `User Created: ID - ${newUser.userID}, Username - ${newUser.username}, Email - ${newUser.email}`;
//             // Clear the form
//            const resetButton = document.getElementById('creation-user-form').reset();
// const Form = () => {
//   // State for handling form data
//   // Handle form input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     if (name === 'name') setName(value);
//     if (name === 'email') setEmail(value);
//   };
//   // Handle form submission
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     setError('');
//     // Call the API function (defined in api.js) to submit the data
//     try {
//       const response = await submitFormData({ name, email });
//       if (response.success) {
//         alert('Form submitted successfully!');
//       } else {
//         setError('Submission failed');
//       }
//     } catch (err) {
//       setError('Something went wrong');
//     } finally {
//       setIsSubmitting(false);
//     }
//   };
//   return;