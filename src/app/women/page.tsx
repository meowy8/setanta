'use client';
import React, { useEffect } from "react";
import ProductCard from "../components/ProductCard";

const WomenPage = () => {
  useEffect(() => {
    const fetchWomenData = async () => {
      const url =
        "https://asos10.p.rapidapi.com/api/v1/getProductList?categoryId=f3a16d47-65ce-4cd8-b08c-d59f6063e695&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0";
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8cc9550550msh56b112eb1858bb7p1dc639jsna65c62ee76cd",
          "X-RapidAPI-Host": "asos10.p.rapidapi.com",
        },
      };

      try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.error(error);
      }
    };

    fetchWomenData();
  }, []);

  return (
    <main className="relative top-20 ">
      <h1 className="ovo m-2 text-3xl">Women</h1>
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
      <div className="grid grid-cols-2 justify-center">
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
