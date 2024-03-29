import Link from "next/link";
import React from "react";

const BasketFooter = ({
  basketTotal,
  numberOfItems,
}: {
  basketTotal: number;
  numberOfItems: number;
}) => {
  return (
    <footer className="fixed bg-white bottom-0 w-full border-t border-black roboto-mono">
      <div className="flex justify-between p-4 gap-8">
        <div className="flex justify-between w-full text-lg">
          <span>Total</span>
          <span>£{basketTotal}</span>
        </div>
        {numberOfItems === 0 ? (
          <div
            className="bg-black/30 text-white p-4 rounded-lg"
          >
            Checkout
          </div>
        ) : (
          <Link
            href={"/checkout"}
            className="bg-black text-white p-4 rounded-lg"
          >
            Checkout
          </Link>
        )}
      </div>
    </footer>
  );
};

export default BasketFooter;
