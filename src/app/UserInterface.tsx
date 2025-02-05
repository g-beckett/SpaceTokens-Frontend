import React from 'react';

export default function UserInterface(){
return(

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <head> 
        <title> User Creation </title>
        <script src = "app.jsx" type="module" defer></script>
      </head>
      <body>
        <div>
          <form id = "creation-user-form">
            <input type = "text" id = "username-id" name = "username" placeholder = "Username" required></input>
            <input type = "text" name = "firstName" placeholder = "First Name" required> </input>
            <input type = "text" name = "lastName" placeholder = "Last Name" required> </input>
            <input type = "email" name = "email" placeholder = "Email" required> </input>
            <button type = "reset"> Reset </button>
            <button type = "submit" id = "mySubmit" formMethod="post"> Create User </button>
          </form>
          </div>
      </body>
        <div>

        </div>
            <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
              <li className="mb-2">
                Get started by editing{" "}
                <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
                  src/app/page.tsx
                </code>
                .
              </li>
              <li>Save and see your changes instantly.</li>
            </ol>
    
            <div className="flex gap-4 items-center flex-col sm:flex-row">
              <a
                className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                
                Deploy now
              </a>
            </div>
          </main>
    </div>
  ); 
}