"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import QuantitySelector from "./QuantitySelector";
import DeleteFromBasketBtn from "./DeleteFromBasketBtn";
import { BasketItemType } from "../../../interfaces";

const BasketItem = ({
  name,
  price,
  imageUrl,
  id,
  removeFromBasket,
  updateBasketTotal,
}: BasketItemType) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [newPrice, setNewPrice] = useState<number>(price);

  useEffect(() => {
    setNewPrice(price);
  }, [price]);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
    setNewPrice((prev) => prev + price);
    updateBasketTotal(price);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
      setNewPrice((prev) => prev - price);
      updateBasketTotal(-price);
    }
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
              <span>£{newPrice}</span>
            </div>
            <div>
              <DeleteFromBasketBtn
                id={id}
                removeFromBasket={removeFromBasket}
              />
            </div>
          </div>
          <div className="flex items-end justify-end h-full">
            <QuantitySelector
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
              quantity={quantity}
            />
          </div>
        </div>
      </div>
      <hr className="w-4/5 h-[2px] bg-black m-3" />
    </div>
  );
};

export default BasketItem;
