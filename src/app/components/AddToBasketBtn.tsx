import React from "react";

const AddToBasketBtn = ({ handleClick }: { handleClick: () => void }) => {
  return <button onClick={handleClick} className="w-full h-full">Add To Basket</button>;
};

export default AddToBasketBtn;
