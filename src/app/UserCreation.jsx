import React from 'react';

    function creationUserForm(){
        const newUser = 'https://localhost:8080/space-tokens/api/v1/user/4'; //{{hostname}}
        const findUserID = 'https://localhost:8080/space-tokens/api/v1/user/new';
        const findUserName = 'https://localhost:8080/space-tokens/api/v1/user/4';

        let userID = localStorage.getItem('userID') || 0;

        const submitButton = document.getElementById('creation-user-form').addEventListener('submit', function (event) {
            event.preventDefault(); 

            userID++;
            localStorage.setItem('userID', userID); // Save the updated userID to localStorage

            const form = document.getElementById('creation-user-form');
            const username = document.getElementById('username').value;
            const firstName = document.getElementById('firstName').value;
            const email = document.getElementById('email').value;


            // Create a user object
            const newUser = {
            userID: userID,
            username: username,
            firstName: firstName,
            email: email,
            };

            // Display the new user (or send it to a server)
            document.getElementById('output').innerText = `User Created: ID - ${newUser.userID}, Username - ${newUser.username}, Email - ${newUser.email}`;

            // Clear the form
            const resetButton = document.getElementById('creation-user-form').reset();
        });
    }    