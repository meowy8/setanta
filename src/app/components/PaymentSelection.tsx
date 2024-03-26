import Image from "next/image";
import React from "react";

const PaymentSelection = ({
  handlePaymentSelection,
  selectedPaymentMethod,
}: {
  handlePaymentSelection: (method: string) => void;
  selectedPaymentMethod: string;
}) => {
  return (
    <section className="grid grid-cols-3 place-items-center w-full border-y border-black p-4">
      <button onClick={() => handlePaymentSelection("paypal")}>
        <div
          className={`w-[100px] h-[100px] absolute hover:bg-black/20 rounded-md ${
            selectedPaymentMethod === "paypal" ? "bg-black/20" : ""
          }`}
        ></div>
        <Image
          alt="paypal"
          src="/icons/paypal-svgrepo-com.svg"
          width={100}
          height={100}
        />
      </button>
      <button onClick={() => handlePaymentSelection("mastercard")}>
        <div
          className={`w-[100px] h-[100px] absolute hover:bg-black/20 rounded-md ${
            selectedPaymentMethod === "mastercard" ? "bg-black/20" : ""
          }`}
        ></div>
        <Image
          alt="mastercard"
          src="/icons/mastercard-svgrepo-com.svg"
          width={100}
          height={100}
        />
      </button>
      <button onClick={() => handlePaymentSelection("visa")}>
        <div
          className={`w-[100px] h-[100px] absolute hover:bg-black/20 rounded-md ${
            selectedPaymentMethod === "visa" ? "bg-black/20" : ""
          }`}
        ></div>
        <Image
          alt="visa"
          src="/icons/visa-svgrepo-com.svg"
          width={100}
          height={100}
        />
      </button>
    </section>
  );
};

export default PaymentSelection;
