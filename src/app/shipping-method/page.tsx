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
  const [checked, setChecked] = useState(false);
  const [selectedShippingMethod, setSelectedShippingMethod] =
    useState<string>("");

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

  const handleChecked = () => {
    setChecked(!checked);
  };

  const handleShippingSelection = (method: string) => {
    setSelectedShippingMethod(method);
  };

  return (
    <main className="relative top-20 roboto-mono mb-44">
      <ShippingMethodSelect
        handleShippingSelection={handleShippingSelection}
        selectedShippingMethod={selectedShippingMethod}
      />
      <section>
        <h1 className=" m-4 text-xl">Items</h1>
        <div className="flex flex-wrap justify-center">
          {basketItems.length > 0 &&
            basketItems.map((product: Product) => (
              <div key={product.id} className="overflow-hidden">
                <Image
                  alt={product.name}
                  src={product.imageUrl[0]}
                  width={175}
                  height={250}
                  className="border border-black object-cover w-full h-full"
                />
              </div>
            ))}
        </div>
        <ul className="p-8 border-y border-black m-4">
          <li className="flex">
            <input
              type="checkbox"
              name="shipping-method"
              id="shipping-method"
              className="mr-2"
              onChange={handleChecked}
              checked={checked}
            />
            <div id="shipping-method" className="flex justify-between w-full">
              <span>Thursday 21, March - Friday 22, March</span>
              <span>£3.95</span>
            </div>
          </li>
        </ul>
      </section>
      <footer className="fixed bottom-0 border-t border-black w-full flex justify-between items-center bg-white">
        {checked && selectedShippingMethod ? (
          <Link
            href={`/payment-method?shipping=${selectedShippingMethod}`}
            className="bg-black text-white h-full py-4 px-10"
          >
            Continue
          </Link>
        ) : (
          <div className="bg-black/40 text-white h-full py-4 px-10">
            Continue
          </div>
        )}
        {checked && <span className="mr-4">Shipping £3.95</span>}
      </footer>
    </main>
  );
};

export default ShippingMethod;
