import Image from "next/image";
import React from "react";
import DeleteFavBtn from "./DeleteFavBtn";
import { FavouritesItemType } from "../../../interfaces";
import AddToBasketBtn from "./AddToBasketBtn";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

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
  }
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
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between h-80 w-screen roboto-mono">
        <div className="h-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={name}
            height={250}
            width={250}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col p-4 w-72">
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <span>{name}</span>
              <span>£{price}</span>
            </div>
            <div>
              <DeleteFavBtn
                id={id}
                removeFromFavourites={removeFromFavourites}
              />
            </div>
          </div>
          <div className="flex items-end justify-end h-full">
            <AddToBasketBtn
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
      <hr className="w-4/5 h-[2px] bg-black m-3" />
    </div>
  );
};

export default FavouritesItem;
