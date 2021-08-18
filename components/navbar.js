import Link from "next/link";

import { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <nav className="z-50 sticky top-0 flex items-center flex-wrap bg-gray-400 p-1 border-2 rounded-lg ">
      <Link href="/">
        <a className="inline-flex items-center p-1 hover:bg-gray-500 ">
          <svg
            className="m-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="feather feather-home"
          >
            <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
            <polyline points="9 22 9 12 15 12 15 22"></polyline>
          </svg>
          
          <span className="text-xl text-white font-bold uppercase tracking-wide m-1 ">
            Winchester
          </span>
        </a>
      </Link>
      <button
        onClick={handleClick}
        className=" inline-flex p-3 hover:bg-gray-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
      <div
        className={`${
          active ? "" : "hidden"
        }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
      >
        <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
          <Link href="/">
            <a
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center 
                        hover:bg-gray-500 hover:text-white "
            >
              Home
            </a>
          </Link>
          <Link href="/">
            <a
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center 
                        hover:bg-gray-500 hover:text-white"
            >
              Services
            </a>
          </Link>
          <Link href="/">
            <a
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center 
                        hover:bg-gray-500 hover:text-white"
            >
              About us
            </a>
          </Link>
          <Link href="/">
            <a
              className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center 
                        hover:bg-gray-500 hover:text-white"
            >
              Contact us
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
