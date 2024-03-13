import React from "react";

const BasketFooter = () => {
  return (
    <footer className="fixed bottom-0 w-full border-t border-black roboto-mono">
      <div className="flex justify-between p-4 gap-8">
        <div className="flex justify-between w-full text-lg">
          <span>Total</span>
          <span>£££</span>
        </div>
        <button className="bg-black text-white p-4 rounded-lg">Checkout</button>
      </div>
    </footer>
  );
};

export default BasketFooter;
