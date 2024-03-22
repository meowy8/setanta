"use client";
import React, { useState } from "react";

const ProductTypeSelector = ({
  changeProductType,
  selectedButton,
}: {
  changeProductType: (type: string) => void;
  selectedButton: string;
}) => {
  return (
    <div className="roboto-mono flex gap-4 p-2">
      <button
        onClick={() => changeProductType("all")}
        className={`border border-black py-1 px-4 hover:bg-black hover:text-white ${
          selectedButton === "all" ? "bg-black text-white" : ""
        }`}
      >
        VIEW ALL
      </button>
      <button
        onClick={() => changeProductType("Bottoms")}
        className={`border border-black py-1 px-4 hover:bg-black hover:text-white ${
          selectedButton === "Bottoms" ? "bg-black text-white" : ""
        }`}
      >
        BOTTOMS
      </button>
      <button
        onClick={() => changeProductType("Jackets/Coats")}
        className={`border border-black py-1 px-4 hover:bg-black hover:text-white ${
          selectedButton === "Jackets/Coats" ? "bg-black text-white" : ""
        }`}
      >
        JACKETS/COATS
      </button>
      <button
        onClick={() => changeProductType("Tops")}
        className={`border border-black py-1 px-4 hover:bg-black hover:text-white ${
          selectedButton === "Tops" ? "bg-black text-white" : ""
        }`}
      >
        TOPS
      </button>
    </div>
  );
};

export default ProductTypeSelector;
