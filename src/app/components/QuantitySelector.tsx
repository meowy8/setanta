"use client";
import React, { useState } from "react";

const QuantitySelector = ({
  handleIncrement,
  handleDecrement,
  quantity,
}: {
  handleIncrement: () => void;
  handleDecrement: () => void;
  quantity: number;
}) => {
  // const handleChange = (input: string) => {
  //   const value = parseInt(input);
  //   if (value < 1) {
  //     setQuantity(1);
  //   } else if (value > 0) {
  //     setQuantity(value);
  //   }
  // };

  return (
    <div className="border border-black flex">
      <button
        onClick={handleDecrement}
        className="flex justify-center items-center w-10 h-10"
      >
        <span>-</span>
      </button>
      <input
        value={quantity}
        readOnly
        className="flex text-center w-10 h-10 border-x border-black outline-none appearance-none"
      />
      <button
        onClick={handleIncrement}
        className="flex justify-center items-center w-10 h-10"
      >
        <span>+</span>
      </button>
    </div>
  );
};

export default QuantitySelector;
