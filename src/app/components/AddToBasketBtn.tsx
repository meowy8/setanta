import React from "react";

const AddToBasketBtn = ({ handleClick }: { handleClick: () => void }) => {
  return <button onClick={handleClick}>Add To Basket</button>;
};

export default AddToBasketBtn;
