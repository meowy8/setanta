"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "../../../interfaces";

const HomePage = () => {
  const [homeData, setHomeData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const querySnapshot = await getDocs(collection(db, "favorites"));
      const favoriteIds = querySnapshot.docs.map((doc) => doc.id);

      localStorage.setItem("favorites", JSON.stringify(favoriteIds));
    };

    fetchFavourites();
  }, []);

  useEffect(() => {
    const fetchHomeData = async () => {
      const collectionRef = collection(db, "categories");
      const q = query(collectionRef, where("id", "==", 4));

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

      setHomeData([...newData]);
    };

    fetchHomeData();
  }, []);

  return (
    <main className="relative top-20">
      <h1 className="ovo m-2 text-3xl">Home</h1>
      {/* Add your home page content here */}
      <div className="grid grid-cols-2 justify-center">
        {homeData.length > 0 &&
          homeData.map((product: Product) => (
            <ProductCard
              name={product.name}
              key={product.id}
              price={product.price}
              imageUrl={product.imageUrl}
              id={product.id}
              description={product.description}
              quantity={product.quantity}
            />
          ))}
      </div>
    </main>
  );
};

export default HomePage;
