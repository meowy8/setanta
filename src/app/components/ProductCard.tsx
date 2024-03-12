import Image from "next/image";
import React from "react";
import HeartButton from "./HeartButton";

const ProductCard = () => {
  return (
    <div className="border border-black w-full h-96">
      <div className="border-b border-black overflow-hidden w-full h-4/5">
        <Image
          src="/images/pexels-ksenia-chernaya-11741419.jpg"
          width={400}
          height={250}
          alt="product image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-1">
        <div className="flex justify-between">
          <p>Product Name</p>
          <HeartButton />
        </div>
        <div>
          <p>££££</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
