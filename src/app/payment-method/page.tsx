"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import PaymentSelection from "../components/PaymentSelection";
import { useParams, useRouter, useSearchParams } from "next/navigation";

const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");

  const params = useSearchParams();
  const shipping = params.get("shipping");

  const handlePaymentSelection = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <main className="relative top-20 roboto-mono">
      <h1 className="m-8 text-md">Choose a payment method</h1>
      <PaymentSelection
        handlePaymentSelection={handlePaymentSelection}
        selectedPaymentMethod={selectedPaymentMethod}
      />
      <footer className="fixed bottom-0 border-t border-black w-full flex justify-between items-center">
        {selectedPaymentMethod ? (
          <Link
            href={`/summary?shipping=${shipping}&payment=${selectedPaymentMethod}`}
            className="bg-black text-white h-full py-4 px-10"
          >
            Continue
          </Link>
        ) : (
          <div className="bg-black/40 text-white h-full py-4 px-10">
            Continue
          </div>
        )}
      </footer>
    </main>
  );
};

export default PaymentMethod;
