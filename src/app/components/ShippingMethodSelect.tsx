import React from "react";

const ShippingMethodSelect = ({
  handleShippingSelection,
  selectedShippingMethod,
}: {
  handleShippingSelection: (method: string) => void;
  selectedShippingMethod: string;
}) => {
  return (
    <section className="border-y border-black flex roboto-mono">
      <button
        onClick={() => handleShippingSelection("home")}
        className={`w-full flex justify-center p-8 hover:bg-black/20 ${
          selectedShippingMethod === "home" ? "bg-black text-white" : ""
        }`}
      >
        Home
      </button>
      <button
        onClick={() => handleShippingSelection("instore")}
        className={`border-x border-black w-full flex justify-center p-8 hover:bg-black/20 ${
          selectedShippingMethod === "instore" ? "bg-black text-white" : ""
        }`}
      >
        In-Store
      </button>
      <button
        onClick={() => handleShippingSelection("drop-point")}
        className={`w-full flex justify-center p-8 hover:bg-black/20 ${
          selectedShippingMethod === "drop-point" ? "bg-black text-white" : ""
        }`}
      >
        Drop Point
      </button>
    </section>
  );
};

export default ShippingMethodSelect;
