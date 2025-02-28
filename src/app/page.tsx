'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import UserCreationForm from './userCreation/userCreationInterface';
import Head from 'next/head';
import Link from 'next/link';
import Hero from "./hero";
import Footer from '../components/footer';
import Navbar from '@/components/navbar';
import Content from './content';
// <Head> figure out how to do with next.js
//   <title> main page </title>
// </Head>

export default function Home () {
  //const [showForm, setShowForm] = useState(false);
  // const router = useRouter();

  return (
    <>
      <Hero />
      <Navbar />
      <Content />
      <Footer />
    </>
    // <div>
    //   <h1> space tokens </h1>
    //    <Link href = '/userCreation'>
    //     <button style={{ marginTop: '10px' }}>
    //       New User
    //     </button>
    //   </Link>
    //   <br />
    //   <button onClick={() => router.push('/timeline')} style={{ marginTop: '10px' }}>
    //     Go to Timeline
    //   </button>
    // </div>
  );
};
