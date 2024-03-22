"use client";
import Image from "next/image";
import React from "react";
import { FavouritesItemType } from "../../../interfaces";
import AddToBasketBtn from "./AddToBasketBtn";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import Link from "next/link";
import DeleteItemBtn from "./DeleteItemBtn";

const FavouritesItem = ({
  name,
  price,
  imageUrl,
  id,
  description,
  removeFromFavourites,
}: FavouritesItemType) => {
  const handleClick = () => {
    addToBasket();
    removeFromFavourites(id);
  };

  const addToBasket = async () => {
    const docRef = doc(db, "basket", `${id}`);
    await setDoc(docRef, {
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl,
      description: description,
      quantity: 1,
    });
  };

  const handleDelete = () => {
    removeFromFavourites(id);
  }

  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between h-80 w-screen roboto-mono">
        <Link href={`/${id}/${name}`} className="h-full overflow-hidden">
          <Image
            src={imageUrl[0]}
            alt={name}
            height={250}
            width={250}
            className="object-cover"
          />
        </Link>
        <div className="flex flex-col p-4 w-72">
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <Link href={`/${id}/${name}`}>{name}</Link>
              <span>£{price}</span>
            </div>
            <div>
              <DeleteItemBtn handleDelete={handleDelete} id={id}/>
            </div>
          </div>
          <div className="flex items-end justify-end h-full">
            <AddToBasketBtn handleClick={handleClick} />
          </div>
        </div>
      </div>
      <hr className="w-4/5 h-[2px] bg-black m-3" />
    </div>
  );
};

export default FavouritesItem;
