import React, { useState } from 'react';

interface UserData {
    username: string;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}

export const createUser = async (userData: UserData) => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        try {
            console.log('worked');
            const response = await fetch('http://localhost:8080/space-tokens/api/v1/user/new', {
                method: 'POST',
                body: JSON.stringify(userData),  
                headers: myHeaders,
            });

            if (!response.ok) {  
                throw new Error(`HTTP error: ${response.status}`);
            }
            const responseData = await response.json();  
            console.log('yip yip hooray:', responseData);

        } catch (error) {
            console.error('errrr:', error);
        }
    };

export default createUser;
