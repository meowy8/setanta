"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const HomeSearchBar = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [productNames, setProductNames] = useState<string[]>([]);

  const router = useRouter();

  useEffect(() => {
    if (inputValue.length > 0) {
      const fetchProductNames = async () => {
        const collectionRef = collection(db, "products");
        const queryRef = query(collectionRef);
        const querySnap = await getDocs(queryRef);
        const names = querySnap.docs.map((doc) => doc.data().name);
        setProductNames(names);
      };

      fetchProductNames();
    }
  }, [inputValue]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    const searchValue = e.target.value;

    if (!searchValue) {
      setSuggestions([]);
      return;
    }
    
    const newSuggestions = productNames.filter((name) =>
      name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setSuggestions(newSuggestions);
    console.log(suggestions)
  }

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
        <div className="bg-white w-4/5 max-h-64 flex flex-col p-1 overflow-scroll">
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
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </form>
  );
};

export default HomeSearchBar;
