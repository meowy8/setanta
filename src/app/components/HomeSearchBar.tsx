"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HomeSearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    if (!inputValue) return;
    const searchSuggestions = async () => {
      const url = `https://asos2.p.rapidapi.com/v2/auto-complete?q=${inputValue}&lang=en-US&sizeSchema=US&currency=USD&country=US&store=US`;
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8cc9550550msh56b112eb1858bb7p1dc639jsna65c62ee76cd",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        setSuggestions([]);
        result.suggestionGroups[0].suggestions.forEach((suggestion: object) => {
          setSuggestions((prev: string[]) => [...prev, suggestion.searchTerm]);
        });
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    searchSuggestions();
  }, [inputValue]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${inputValue}`);
  };

  return (
    <form
      onSubmit={(e) => handleSubmit(e)}
      className="fixed bottom-8 pb-10 w-full flex flex-col justify-center items-center z-10"
    >
      {suggestions.length > 0 && (
        <div className="bg-white w-4/5 h-64 flex flex-col p-1 overflow-scroll">
          {suggestions.map((suggestion, index) => (
            <Link
              href={`/search?q=${suggestion}`}
              key={index}
              className="w-full flex hover:bg-black/40 rounded-md p-2"
            >
              {suggestion}
            </Link>
          ))}
        </div>
      )}
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
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
      </div>
    </form>
  );
};

export default HomeSearchBar;
