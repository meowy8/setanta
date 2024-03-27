"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "../../../interfaces";
import ProductsDisplay from "../components/ProductsDisplay";
import PageHeader from "../components/PageHeader";

const MenPage = () => {
  const [accessoriesData, setAccessoriesData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchAcessoriesData = async () => {
      const collectionRef = collection(db, "categories");
      const q = query(collectionRef, where("id", "==", 3));

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

      setAccessoriesData([...newData]);
    };

    fetchAcessoriesData();
  }, []);

  return (
    <main className="relative top-20">
      <PageHeader>Accessories</PageHeader>
      <ProductsDisplay data={accessoriesData} />
    </main>
  );
};

export default MenPage;
