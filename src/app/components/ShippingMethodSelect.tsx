import React from "react";

const ShippingMethodSelect = () => {
  return (
    <section className="border-y border-black flex roboto-mono">
      <button className="w-full flex justify-center p-8 bg-white hover:bg-black/20">
        Home
      </button>
      <button className="border-x border-black w-full flex justify-center p-8 bg-white hover:bg-black/20">
        In-Store
      </button>
      <button className="w-full flex justify-center p-8 bg-whiteF hover:bg-black/20">
        Drop Point
      </button>
    </section>
  );
};

export default ShippingMethodSelect;
