import React from "react";
import { Product } from "../../../interfaces";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

const AddToBasketBtn = ({
  name,
  price,
  id,
  imageUrl,
  description,
}: Product) => {
  const addToBasket = async () => {
    const docRef = doc(db, "basket", `${id}`);
    await setDoc(docRef, {
      id: id,
      name: name,
      price: price,
      imageUrl: imageUrl,
      description: description,
    });
  };

  return <button onClick={addToBasket}>Add To Basket</button>;
};

export default AddToBasketBtn;
