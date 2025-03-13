"use client";
import React, { useState, useEffect } from "react";



const NAV_MENU = ["Home", "About Us", "Timeline"]

function NavItem({ children }: { children: React.ReactNode }) {
  return (
    <li>
      <a href="#" className="flex items-center gap-2 font-medium">
        {children}
      </a>
    </li>
  );
}

export function Navbar() {
    const [open, setOpen] = useState(false);
    const [isScrolling, setIsScrolling] = useState(false);

    function handleOpen() {
        setOpen((cur) => !cur);
    }

    useEffect(() => {
        window.addEventListener(
        "resize", () => window.innerWidth >= 960 && setOpen(false)
        );
    }, []);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY > 0) {
                setIsScrolling(true);
            } else {
                setIsScrolling(false);
            }     
        }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full border-0 ${
        isScrolling ? "bg-blue-gray-900" : "bg-transparent"
      }`} >
    
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href = "localhost:3000"
            target="_blank"
            className={`text-lg font-bold ${
            isScrolling ? "text-white" : "text-white"
          }`}
        > Space Tokens </a>

        <ul className={`ml-10 hidden items-center gap-6 lg:flex ${
            isScrolling ? "text-white" : "text-white"
          }`} >
            
          {NAV_MENU.map((name) => (
            <NavItem key={name}>{name}</NavItem>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
            <a href="/userLogin">
            <button className={`px-4 py-2 rounded ${
                isScrolling ? "text-white" : "text-white"
                }`} 
            > Log in </button>
            </a>
          <a href="/userCreation" target="_blank">
            <button className={`px-4 py-2 rounded ${
                isScrolling ? "bg-gray-200 text-gray-700" : "bg-white text-gray-700"
              }`}
            > Sign Up </button>
          </a>
        </div>

        <button onClick={handleOpen} className={`ml-auto inline-block lg:hidden ${
            isScrolling ? "text-gray-700" : "text-white"
          }`} >

          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6" >
                    
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"/>
            </svg>

          ) : (
            <svg xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6" >
                
                <path strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <div className="container mx-auto bg-white rounded-lg py-4 px-6 mt-3 border-t border-gray-200 lg:hidden">
          <ul className="flex flex-col gap-4">
            {NAV_MENU.map((name) => (
              <NavItem key={name}>{name}</NavItem>
            ))}
          </ul>
          <div className="mt-6 flex items-center gap-2">
            <button className="px-4 py-2 rounded text-gray-700"> Log in </button>
            <a href="" target="_blank">
              <button className="px-4 py-2 rounded bg-gray-200 text-gray-700">
                blocks
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;