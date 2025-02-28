"use client";

import Image from 'next/image';


function Hero() {
    return (
        <div className = "relative min-h-screen w-full" >
            <Image src = "/images/planeta-zvezdy-galaktika.jpg"
                alt = "Background Image"
                fill
                className = "object-cover object-center" />
            <div className = "grid min-h-screen px-8">
            <div className = "container relative z-10 my-auto mx-auto grid place-items-center text-center">
            <h1 className = "text-4xl font-bold text-white">
                Space Tokens
            </h1>
              <p className = "mt-4 mb-12 w-full text-lg text-white md:max-w-full lg:max-w-3xl">
                Your Digital Time Machine !
              </p>
              <a href = "/userCreation"
              className = "mt-1 mb-7 font-medium uppercase text-white">
                sign up today
              </a>
            </div>
          </div>
        </div>
      );
  }
  export default Hero;