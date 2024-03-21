import Link from "next/link";
import React from "react";

const CheckoutFooter = () => {
  return (
    <footer className="fixed bg-white bottom-0 w-full border-t border-black roboto-mono">
      <div className="flex justify-end p-4 gap-8">
        <Link
          href={"/shipping-method"}
          className="bg-black text-white p-4 rounded-lg"
        >
          Continue
        </Link>
      </div>
    </footer>
  );
};

export default CheckoutFooter;
