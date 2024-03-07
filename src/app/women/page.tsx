import React from "react";
import ProductCard from "../components/ProductCard";

const WomenPage = () => {
  return (
    <main className="relative top-20 ">
      <div className="roboto-mono flex gap-4 p-2">
        <button className="border border-black py-1 px-4 hover:bg-black hover:text-white">
          VIEW ALL
        </button>
        <button className="border border-black py-1 px-4 hover:bg-black hover:text-white">
          JOGGERS
        </button>
        <button className="border border-black py-1 px-4 hover:bg-black hover:text-white">
          CARGO
        </button>
        <button className="border border-black py-1 px-4 hover:bg-black hover:text-white">
          SHORTS
        </button>
      </div>

      <div className="flex flex-wrap justify-center">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </main>
  );
};

export default WomenPage;
