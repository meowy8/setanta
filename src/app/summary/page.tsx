"use client";
import { collection, query, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Product } from "../../../interfaces";
import { db } from "../firebase";
import Image from "next/image";
import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import { useRouter } from "next/router";

const Summary = () => {
  const [basketItems, setBasketItems] = useState<Product[]>([]);
  const [numberOfItems, setNumberOfItems] = useState(0);

  const params = useSearchParams();
  const shipping = params.get("shipping");
  const payment = params.get("payment");

  useEffect(() => {
    setNumberOfItems(basketItems.length);
  }, [basketItems]);

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
      <p className="p-4">Number of items: {numberOfItems}</p>
      <div className="flex flex-wrap justify-center ">
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
      <section className="flex flex-col p-4 ">
        <div className="p-8 border-b border-black">
          <p>Shipping method: {shipping}</p>
        </div>
        <div className="p-8 border-b border-black">
          <p>Payment method: {payment}</p>
        </div>
      </section>
      <footer className="fixed bottom-0 w-full">
        <div></div>
        <div className=" border-t border-black w-full flex justify-between items-center">
          <Link
            href={"/payment-successful"}
            className="bg-black text-white h-full py-4 px-10"
          >
            Authorise Payment
          </Link>
        </div>
      </footer>
    </main>
  );
};

export default Summary;
