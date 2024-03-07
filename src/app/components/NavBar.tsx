"use client";
import Link from "next/link";
import React, { useState } from "react";

const Sidebar = ({
  toggleSidebar,
  isOpen,
}: {
  toggleSidebar: () => void;
  isOpen: boolean;
}) => {
  return (
    <aside>
      <button onClick={toggleSidebar} className="">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={0.9}
          stroke="currentColor"
          className="w-10 h-10"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <section
        className={`fixed ovo left-0 top-0 h-full w-64 bg-white text-black z-100 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out border-r-2 border-black`}
      >
        <div className="flex justify-between items-center p-4">
          <button
            onClick={toggleSidebar}
            className="text-black focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <ul className="px-4 py-10 text-black font-semibold w-44">
          <li
            onClick={toggleSidebar}
            className="px-4 py-2 cursor-pointer rounded-lg"
          >
            Women
          </li>
          <li
            onClick={toggleSidebar}
            className="px-4 py-2 cursor-pointer rounded-lg"
          >
            Men
          </li>
          <li
            onClick={toggleSidebar}
            className="px-4 py-2 cursor-pointer rounded-lg"
          >
            Accessories
          </li>
          <li
            onClick={toggleSidebar}
            className="px-4 py-2 cursor-pointer rounded-lg"
          >
            Home
          </li>
        </ul>
      </section>
    </aside>
  );
};

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex justify-between items-center p-4 fixed w-full">
      <Sidebar toggleSidebar={toggleSidebar} isOpen={isOpen} />
      <div className="flex items-center gap-4">
        <Link href={"/"} className="slackside-one text-[36px] mb-2">
          Setanta
        </Link>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.2}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </div>
    </nav>
  );
};

export default NavBar;
