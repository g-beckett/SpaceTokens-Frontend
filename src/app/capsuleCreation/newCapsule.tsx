'use client'
import React, { useState } from 'react';
import createCapsule from '../apiCapsule';
import Head from 'next/head';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../globals.css';

const CapsuleCreationForm: React.FC = () =>  {
    const router = useRouter();

    const [capsuleData, setCapsuleData] = useState({
      //  userId: [],  
        capsuleName: '',
        unlockedDate: new Date(), 
        description: '',
        isPublic: false,
        statusId: '',
})

const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
        const response = await createCapsule(capsuleData);
        console.log('yayyyy:', response);

        router.push('{{hostname}}/space-tokens/api/v1/timeline/{{username}}');

    } catch (error) {
        console.error('lol try again:', error);
    }
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'unlockedDate') {
        setCapsuleData({...capsuleData, [name]: new Date(value) });

    } else {
    setCapsuleData({ ...capsuleData, [event.target.name]: event.target.value });
    }
 };

    return(
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]" >
        {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start"> */}
        <section>
            <div>
                <Link href = '/timeline'>
                    <button style={{ marginTop: '10px' }}>
                        Back to Timeline
                    </button>
                </Link>
                <form method = "post" onSubmit={handleSubmit} >
                    <p>
                    {/* <Label for ="capsuleName"> name of capsule : </Label>  */}
                    <label htmlFor = "capsuleName"> name of capsule :  </label>
                    <input type = "text" 
                        id = "capsuleName" 
                        name = "capsuleName" 
                        placeholder = "title" 
                        // minlength="1" maxlength="100"
                        value = {capsuleData.capsuleName}
                        onChange = {handleChange}
                        required /> </p>
                    <br />

                    <label htmlFor = "unlockedDate"> unlocked date :  </label>
                    <input type = "date" 
                        id = "unlockedDate" 
                        name = "unlockedDate" 
                        // min="current date"
                        placeholder = "unlocked fdate" 
                        value = {capsuleData.unlockedDate.toISOString().split('T')[0]}
                        onChange = {handleChange}
                        required />
                    <br />
                    <br />

                    <label htmlFor = "description"> description :  </label>
                    <input type = "text" 
                        name = "description" 
                        placeholder = "type something within the box"
                        // rows="5" cols="25"
                        value = {capsuleData.description}
                        onChange = {handleChange} 
                        required /> 
                    <br />
                    
                    <button type = "reset"> Reset </button>
                    <br />
                    <button type = "submit"  id = "mySubmit" onClick={() => alert('capsule created')} > User Capsule </button>
                </form>
            </div>
        </section>
        {/* </main> */}
        </div>
    ); 
}
export default CapsuleCreationForm;