"use client";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import { Product } from "../../../interfaces";

const HeartButton = ({ id, imageUrl, name, price, description }: Product) => {
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    console.log("id", id);
  }, [id]);

  const addToFavourites = async () => {
    const docRef = doc(db, "favourites", `${id}`);
    await setDoc(docRef, {
      id: id,
      imageUrl: imageUrl,
      name: name,
      price: price,
      description: description,
    });
    setLiked(true);
  };

  const removeFromFavourites = async () => {
    const docRef = doc(db, "favourites", `${id}`);
    await deleteDoc(docRef);
    setLiked(false);
  };

  const handleClick = () => {
    if (liked) {
      removeFromFavourites();
    } else {
      addToFavourites();
    }
  };

  return (
    <button onClick={handleClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className={`w-6 h-6 ${
          liked ? `fill-black` : `fill-none`
        } hover:fill-black`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
        />
      </svg>
    </button>
  );
};

export default HeartButton;
