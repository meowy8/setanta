"use client";
import React from "react";
import CheckoutItem from "../components/CheckoutItem";

const Checkout = () => {
  return (
    <main className="relative top-20">
      <span className="ovo m-2 text-3xl">Checkout</span>
      <div>
        <CheckoutItem />
      </div>
    </main>
  );
};

export default Checkout;
