"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import { BasketItemType } from "../../../interfaces";
import Link from "next/link";
import DeleteItemBtn from "./DeleteItemBtn";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const BasketItem = ({
  name,
  price,
  imageUrl,
  id,
  quantity,
  removeFromBasket,
  updateBasketTotal,
}: BasketItemType) => {
  const [quantityState, setQuantityState] = useState<number>(1);
  const [newPrice, setNewPrice] = useState<number>(price);

  useEffect(() => {
    setNewPrice(price * quantityState);
  }, [price, quantityState]);

  useEffect(() => {
    setQuantityState(quantity);
  }, [quantity]);

  const handleIncrement = () => {
    setQuantityState((prev) => prev + 1);
    setNewPrice((prev) => prev + price);
    updateBasketTotal(price);
    updateQuantityData(1);
  };

  const handleDecrement = () => {
    if (quantityState > 1) {
      setQuantityState((prev) => prev - 1);
      setNewPrice((prev) => prev - price);
      updateBasketTotal(-price);
      updateQuantityData(-1);
    }
  };

  const handleDelete = () => {
    removeFromBasket(id);
  };

  const updateQuantityData = async (increment: number) => {
    const docRef = doc(db, "basket", `${id}`);
    await updateDoc(docRef, {
      quantity: quantityState + increment,
    });
  };

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
              <span>£{newPrice}</span>
            </div>
            <div>
              <DeleteItemBtn id={id} handleDelete={handleDelete} />
            </div>
          </div>
          <div className="flex items-end justify-end h-full">
            <QuantitySelector
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              quantityState={quantityState}
            />
          </div>
        </div>
      </div>
      <hr className="w-4/5 h-[2px] bg-black m-3" />
    </div>
  );
};

export default BasketItem;
