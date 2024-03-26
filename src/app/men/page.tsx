"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "../../../interfaces";
import ProductTypeSelector from "../components/ProductTypeSelector";
import ProductsDisplay from "../components/ProductsDisplay";

const MenPage = () => {
  const [menData, setMenData] = useState<Product[]>([]);
  const [productType, setProductType] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >();
  const [selectedButton, setSelectedButton] = useState<string>("all");

  useEffect(() => {
    const fetchMenData = async () => {
      const collectionRef = collection(db, "categories");
      const q = query(collectionRef, where("id", "==", 2));

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
      setFilteredProducts([...newData]);
    };

    fetchMenData();
  }, []);

  useEffect(() => {
    const filteredData = filterByProductType();
    setFilteredProducts(filteredData);
    setSelectedButton(productType);
  }, [productType]);

  const changeProductType = (type: string) => {
    setProductType(type);
  };

  const filterByProductType = () => {
    if (productType === "all") {
      return menData;
    } else if (productType === "Jackets/Coats") {
      return menData.filter((product) => product.type === "Jackets/Coats");
    } else if (productType === "Tops") {
      return menData.filter((product) => product.type === "Tops");
    } else if (productType === "Bottoms") {
      return menData.filter((product) => product.type === "Bottoms");
    }
  };

  return (
    <main className="relative top-20 ">
      <h1 className="ovo m-2 text-3xl">Men</h1>
      <ProductTypeSelector changeProductType={changeProductType} selectedButton={selectedButton}/>
      <ProductsDisplay data={filteredProducts || menData} />
    </main>
  );
};

export default MenPage;
