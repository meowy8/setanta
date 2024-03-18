"use client";
import React, { useEffect, useState } from "react";
import BasketItem from "../components/BasketItem";
import BasketFooter from "../components/BasketFooter";
import { Product } from "../../../interfaces";
import { collection, deleteDoc, doc, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";

const Basket = () => {
  const [basketItems, setBasketItems] = useState<Product[]>([]);

  const removeFromBasket = async (id: number) => {
    const docRef = doc(db, "basket", `${id}`);
    await deleteDoc(docRef);
    setBasketItems(basketItems.filter((product) => product.id !== id));
    console.log("Document successfully deleted!");
  };

  useEffect(() => {
    const fetchBasketItems = async () => {
      const collectionRef = collection(db, "basket");
      const q = query(collectionRef);

      const querySnap = await getDocs(q);
      const newData: Product[] = [];
      const processedIds = new Set();

      querySnap.forEach((doc) => {
        const data = doc.data() as Product;
        if (!processedIds.has(doc.id)) {
          newData.push(data);
          processedIds.add(doc.id);
        }
        console.log(doc.id, " => ", doc.data());
      });

      setBasketItems([...newData]);
    };

    fetchBasketItems();
  }, []);

  return (
    <main className="relative top-20">
      <h1 className="ovo m-2 text-3xl">Basket</h1>
      {basketItems.length > 0 &&
        basketItems.map((product: Product) => (
          <BasketItem
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            id={product.id}
            description={product.description}
            removeFromBasket={removeFromBasket}
          />
        ))}
      <BasketFooter />
    </main>
  );
};

export default Basket;
