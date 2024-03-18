import Image from "next/image";
import React from "react";
import HeartButton from "./HeartButton";

const ProductCard = ({ imageUrl, name, price }) => {
  return (
    <div className="border border-black w-full h-96">
      <div className="border-b border-black overflow-hidden w-full h-4/5">
        <Image
          src={imageUrl}
          width={400}
          height={250}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-1 roboto-mono">
        <div className="flex justify-between">
          <p>{name}</p>
          <HeartButton />
        </div>
        <div>
          <p>£{price}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
