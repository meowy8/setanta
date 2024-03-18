"use client";
import React from "react";
import BasketItem from "../components/BasketItem";
import BasketFooter from "../components/BasketFooter";

const Basket = () => {
  return (
    <main className="relative top-20">
      <h1 className="ovo m-2 text-3xl">Basket</h1>
      <BasketItem />
      <BasketFooter />
    </main>
  );
};

export default Basket;
