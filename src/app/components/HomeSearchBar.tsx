import React from "react";

const HomeSearchBar = () => {
  return (
    <div className="fixed bottom-8 pb-10 w-full flex justify-center">
      <div className="w-4/5 h-8 flex items-center backdrop-blur-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-4 h-4 absolute ml-2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <input
          type="text"
          className="w-full h-full bg-white/20 rounded-md placeholder:text-black/60 p-2 pl-8 outline-none focus:bg-white"
          placeholder="Search"
        />
      </div>
    </div>
  );
};

export default HomeSearchBar;
