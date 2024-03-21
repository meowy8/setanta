import Image from "next/image";
import Link from "next/link";
import React from "react";

const PaymentMethod = () => {
  return (
    <main className="relative top-20 roboto-mono">
      <h1 className="m-8 text-md">Choose a payment method</h1>
      <section className="grid grid-cols-3 place-items-center w-full border-y border-black p-4">
        <button>
          <div className="w-[100px] h-[100px] absolute hover:bg-black/20 rounded-md"></div>
          <Image
            alt="paypal"
            src="/icons/paypal-svgrepo-com.svg"
            width={100}
            height={100}
          />
        </button>
        <button>
          <div className="w-[100px] h-[100px] absolute hover:bg-black/20 rounded-md"></div>
          <Image
            alt="mastercard"
            src="/icons/mastercard-svgrepo-com.svg"
            width={100}
            height={100}
          />
        </button>
        <button>
          <div className="w-[100px] h-[100px] absolute hover:bg-black/20 rounded-md"></div>
          <Image
            alt="visa"
            src="/icons/visa-svgrepo-com.svg"
            width={100}
            height={100}
          />
        </button>
      </section>
      <footer className="fixed bottom-0 border-t border-black w-full flex justify-between items-center">
        <Link
          href={"/summary"}
          className="bg-black text-white h-full py-4 px-10"
        >
          Continue
        </Link>
        <span className="mr-4">£££</span>
      </footer>
    </main>
  );
};

export default PaymentMethod;
