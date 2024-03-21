import Link from "next/link";
import React from "react";

const PaymentSuccessful = () => {
  return (
    <main className="relative top-20 roboto-mono flex items-center flex-col">
      <p className="p-4 text-xl">Payment Successful!</p>
      <Link href={"/"} className="hover:opacity-50">Return to Home Page</Link>
    </main>
  );
};

export default PaymentSuccessful;
