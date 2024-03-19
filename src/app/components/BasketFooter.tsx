import Link from "next/link";
import React from "react";

const BasketFooter = ({ basketTotal }: { basketTotal: number }) => {
  return (
    <footer className="fixed bg-white bottom-0 w-full border-t border-black roboto-mono">
      <div className="flex justify-between p-4 gap-8">
        <div className="flex justify-between w-full text-lg">
          <span>Total</span>
          <span>£{basketTotal}</span>
        </div>
        {/* this will be faded when no items are in basket */}
        <Link href={"/checkout"} className="bg-black text-white p-4 rounded-lg">
          Checkout
        </Link>
      </div>
    </footer>
  );
};

export default BasketFooter;
