"use client";
import React, { useEffect, useState } from "react";
import CheckoutItem from "../components/CheckoutItem";
import { Product } from "../../../interfaces";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import CheckoutFooter from "../components/CheckoutFooter";

const Checkout = () => {
  const [checkoutItems, setCheckoutItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCheckoutItems = async () => {
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

      setCheckoutItems([...newData]);
    };

    fetchCheckoutItems();
  }, []);

  return (
    <main className="relative top-20">
      <span className="ovo m-2 text-3xl">Checkout</span>
      <div>
        {checkoutItems.length > 0 &&
          checkoutItems.map((product: Product) => (
            <CheckoutItem
              key={product.id}
              name={product.name}
              price={product.price}
              imageUrl={product.imageUrl}
              quantity={product.quantity}
              id={product.id}
              description={product.description}
              type={product.type}
            />
          ))}
      </div>
      <CheckoutFooter />
    </main>
  );
};

export default Checkout;
