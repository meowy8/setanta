import Image from "next/image";
import React, { useEffect, useState } from "react";
import HeartButton from "./HeartButton";
import { Product } from "../../../interfaces";
import { deleteDoc, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import AddToBasketBtn from "./AddToBasketBtn";
import Link from "next/link";

const ProductCard = ({ imageUrl, name, price, id, description }: Product) => {
  const [liked, setLiked] = useState(() => {
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    return favourites.includes(id);
  });

  const handleClick = () => {
    addToBasket();
  };
  const addToBasket = async () => {
    const docRef = doc(db, "basket", `${id}`);
    await setDoc(docRef, {
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl,
      description: description,
    });
  };

  const addToFavourites = async () => {
    const docRef = doc(db, "favourites", `${id}`);
    await setDoc(docRef, {
      id: id,
      imageUrl: imageUrl,
      name: name,
      price: price,
      description: description,
    });

    // Update liked state
    setLiked(true);

    // Update local storage
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updatedFavourites = [...favourites, id];
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const removeFromFavourites = async () => {
    const docRef = doc(db, "favourites", `${id}`);
    await deleteDoc(docRef);

    // Update liked state
    setLiked(false);

    // Update local storage
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updatedFavourites = favourites.filter(
      (favoriteId: number) => favoriteId !== id
    );
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <div className="border border-black w-full h-96">
      <Link
        href={`/${id}/${name}`}
        className="border-b border-black overflow-hidden w-full h-4/5"
      >
        <Image
          src={imageUrl}
          width={400}
          height={250}
          alt={name}
          className="w-full h-full object-cover"
        />
      </Link>
      <div className="p-1 roboto-mono">
        <div className="flex justify-between">
          <Link href={`/${id}/${name}`}>{name}</Link>
          <HeartButton
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
            liked={liked}
          />
        </div>
        <div className="flex justify-between mt-1">
          <p>£{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
