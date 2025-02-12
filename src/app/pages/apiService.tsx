import React, { useState } from 'react';

export const submitUserForm = async (data: unknown) => {

    try {
        const response = await fetch('', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),  
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
