"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "../../../interfaces";

const MenPage = () => {
  const [menData, setMenData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchMenData = async () => {
      const collectionRef = collection(db, "categories");
      const q = query(collectionRef, where("id", "==", 1));

      const querySnap = await getDocs(q);
      const newData: Product[] = [];
      const processedIds = new Set();

      querySnap.forEach((doc) => {
        const data = doc.data();
        if (!processedIds.has(doc.id)) {
          newData.push(...data.products);
          processedIds.add(doc.id);
        }
      });

      setMenData([...newData]);
    };

    fetchMenData();
  }, []);

  return (
    <main className="relative top-20 ">
      <h1 className="ovo m-2 text-3xl">Men</h1>
      <div className="roboto-mono flex gap-4 p-2">
        <button className="border border-black py-1 px-4 hover:bg-black hover:text-white">
          VIEW ALL
        </button>
        <button className="border border-black py-1 px-4 hover:bg-black hover:text-white">
          JOGGERS
        </button>
        <button className="border border-black py-1 px-4 hover:bg-black hover:text-white">
          CARGO
        </button>
        <button className="border border-black py-1 px-4 hover:bg-black hover:text-white">
          SHORTS
        </button>
      </div>
      <div className="grid grid-cols-2 justify-center">
        {menData.length > 0 &&
          menData.map((product: Product) => (
            <ProductCard
              name={product.name}
              key={product.id}
              price={product.price}
              imageUrl={product.imageUrl}
              id={product.id}
              description={product.description}
            />
          ))}
      </div>
    </main>
  );
};

export default MenPage;