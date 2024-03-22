"use client";
import React, { useEffect, useState } from "react";
import ShippingMethodSelect from "../components/ShippingMethodSelect";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "../../../interfaces";
import CheckoutItem from "../components/CheckoutItem";
import Image from "next/image";
import Link from "next/link";

const ShippingMethod = () => {
  const [basketItems, setBasketItems] = useState<Product[]>([]);

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
    <main className="relative top-20 roboto-mono">
      <ShippingMethodSelect />
      <section>
        <h1 className=" m-4 text-xl">Items</h1>
        <div className="flex flex-wrap justify-center">
          {basketItems.length > 0 &&
            basketItems.map((product: Product) => (
              <Image
                alt={product.name}
                key={product.id}
                src={product.imageUrl[0]}
                width={175}
                height={250}
                className="border border-black"
              />
            ))}
        </div>
        <ul className="p-8 border-y border-black m-4">
          <li className="flex">
            <input
              type="checkbox"
              name="shipping-method"
              id="shipping-method"
              className="mr-2"
            />
            <div id="shipping-method" className="flex justify-between w-full">
              <span>Thursday 21, March - Friday 22, March</span>
              <span>£3.95</span>
            </div>
          </li>
        </ul>
      </section>
      <footer className="fixed bottom-0 border-t border-black w-full flex justify-between items-center">
        <Link href={"/payment-method"} className="bg-black text-white h-full py-4 px-10">
          Continue
        </Link>
        <span className="mr-4">Shipping £3.95</span>
      </footer>
    </main>
  );
};

export default ShippingMethod;
