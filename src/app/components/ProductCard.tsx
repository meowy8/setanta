import Image from "next/image";
import React, { useState } from "react";
import HeartButton from "./HeartButton";
import { Product } from "../../../interfaces";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";

const ProductCard = ({ imageUrl, name, price, id, description }: Product) => {
  const [liked, setLiked] = useState(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    return favourites.includes(id);
  });

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

    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updatedFavourites = [...favourites, id];
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const removeFromFavourites = async () => {
    const docRef = doc(db, "favourites", `${id}`);
    await deleteDoc(docRef);

    setLiked(false);

    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updatedFavourites = favourites.filter(
      (favoriteId: number) => favoriteId !== id
    );
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="border border-black w-56 h-72 lg:w-64 lg:h-80 rounded-md overflow-hidden text-white">
      <div className="h-4/5 overflow-hidden">
        <Link href={`/${id}/${name}`} className="flex overflow-hidden h-full hover:scale-105 transition-transform duration-500">
          <Image
            src={imageUrl[0]}
            width={250}
            height={300}
            alt={name}
            className="w-full h-full object-cover overflow-hidden"
          />
        </Link>
      </div>
      <div
        id="description"
        className=" p-2 roboto-mono bg-[#0d0d0d] w-full h-1/5 relative border-t border-black"
      >
        <div className="flex justify-between">
          <div>
            <Link href={`/${id}/${name}`}>{name}</Link>
          </div>
          <HeartButton
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
            liked={liked}
          />
        </div>
        <div className="flex justify-between">
          <p className="text-sm">£{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
