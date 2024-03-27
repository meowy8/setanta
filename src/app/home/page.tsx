"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "../../../interfaces";
import ProductsDisplay from "../components/ProductsDisplay";
import PageHeader from "../components/PageHeader";

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

  useEffect(() => {
    homeData.forEach((product) => {
      console.log(product.id)
    })
  })

  return (
    <main className="relative top-20">
      <PageHeader>Home</PageHeader>
      <ProductsDisplay data={homeData} />
    </main>
  );
};

export default HomePage;
