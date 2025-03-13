"use client";

import React from "react";
import Image from "next/image";


function Content() {

  return (
    <section className = "py-12 px-8">
      <div className = "mx-auto max-w-screen-md">
        <p className = "my-12 text-gray-500">
            Imagine a place where your memories aren’t just stored—they’re transformed 
            into treasured time capsules, waiting to be rediscovered at the perfect moment. 
            Welcome to Space Tokens, the ultimate platform for capturing, preserving, and 
            reliving the most meaningful parts of your life.
        </p>

        <h2 className="mt-8 mb-6 text-blue-gray-900 text-2xl font-bold">
            Here’s how it works:
        </h2>

        <p className = "my-10 text-gray-500">
            1. Create Your Tokens: Each "token" is a digital time capsule for a specific 
                moment, phase, or milestone in your life.
            <br />
            2. Fill It with Memories: Add photos, videos, notes, and more to bring your 
                capsule to life.
            <br />
            3. Set the Date: 
                Choose when your token will unlock—whether it’s 1 year, 10 years, or even decades from now.
            <br />
            4. Rediscover and Reflect: When the time comes, your token unlocks, giving 
                you the gift of reliving your past with fresh eyes.
            <br />
        </p>

        <div className = "container mx-auto px-4 py-20">
          {/* <div className = "w-full mb-10 md:flex items-center justify-between">
            <div className = "flex mb-5 md:mb-0 items-center gap-3">
              <button className = "px-4 py-2 text-sm border border-gray-300 rounded-lg">
                stories
              </button>
              <button className = "px-4 py-2 text-sm border border-gray-300 rounded-lg">
                design
              </button>
              <button className = "px-4 py-2 text-sm border border-gray-300 rounded-lg">
                catle
              </button>
            </div>
          </div> */}
            <section id = "about-us">
                <h2 className="mt-8 mb-6 text-blue-gray-900 text-2xl font-bold">
                    Creators
                </h2>
            <div className=" md:flex items-center justify-between">
            <div className="mb-4 md:mb-0 md:flex items-center gap-5 max-w-2xl">
              <div className="h-full mb-3 md:mb-0 w-full max-h-[4rem] max-w-[4rem] md:max-w-[6rem] md:max-h-[6rem] rounded-lg ">
                <Image
                  width={768}
                  height={768}
                  src="/profiles/pie.jpeg"
                  className="rounded-2xl"
                  alt="pierciePhoto"
                />
              </div>
              <div>
                <h5 className="mb-4 md:mb-0 text-blue-gray-900 text-xl font-bold">
                  Pierce Beckett
                </h5>
                <p className="w-full md:w-10/12 text-gray-500">
                  The best big brother and back-end developer ever !!!
                </p>
              </div>

              <div className="h-full mb-3 md:mb-0 w-full max-h-[4rem] max-w-[4rem] md:max-w-[6rem] md:max-h-[6rem] rounded-lg ">
                <Image
                  width={768}
                  height={768}
                  src="/profiles/image1.jpeg"
                  className="rounded-2xl"
                  alt="gabriellePhoto"
                />
              </div>
              <div>
                <h5 className="mb-4 md:mb-0 text-blue-gray-900 text-xl font-bold">
                  Gabrielle Beckett
                </h5>
                <p className="w-full md:w-10/12 text-gray-500">
                  A noob
                </p>
              </div>

              <div className="h-full mb-3 md:mb-0 w-full max-h-[4rem] max-w-[4rem] md:max-w-[6rem] md:max-h-[6rem] rounded-lg ">
                <Image
                  width={768}
                  height={768}
                  src="/profiles/image2.jpeg"
                  className="rounded-2xl"
                  alt="artemisPhoto"
                />
              </div>
              <div>
                <h5 className="mb-4 md:mb-0 text-blue-gray-900 text-xl font-bold">
                  Artemis
                </h5>
                <p className="w-full md:w-10/12 text-gray-500">
                  The cute mascot
                </p>
              </div>
            </div>
          </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default Content;