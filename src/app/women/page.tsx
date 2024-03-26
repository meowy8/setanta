"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "../../../interfaces";
import ProductTypeSelector from "../components/ProductTypeSelector";
import ProductsDisplay from "../components/ProductsDisplay";

const WomenPage = () => {
  const [womenData, setWomenData] = useState<Product[]>([]);
  const [productType, setProductType] = useState<string>("all");
  const [filteredProducts, setFilteredProducts] = useState<
    Product[] | undefined
  >([]);
  const [selectedButton, setSelectedButton] = useState<string>("all");

  useEffect(() => {
    const fetchWomenData = async () => {
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

      setWomenData([...newData]);
      setFilteredProducts([...newData]);
    };

    fetchWomenData();
  }, []);

  const changeProductType = (type: string) => {
    setProductType(type);
  };

  const filterByProductType = () => {
    if (productType === "all") {
      return womenData;
    } else if (productType === "Jackets/Coats") {
      return womenData.filter((product) => product.type === "Jackets/Coats");
    } else if (productType === "Tops") {
      return womenData.filter((product) => product.type === "Tops");
    } else if (productType === "Bottoms") {
      return womenData.filter((product) => product.type === "Bottoms");
    }
  };

  useEffect(() => {
    const filteredData = filterByProductType();
    setFilteredProducts(filteredData);
    setSelectedButton(productType);
  }, [productType]);

  return (
    <main className="relative top-20 ">
      <h1 className="ovo m-2 text-3xl">Women</h1>
      <ProductTypeSelector
        changeProductType={changeProductType}
        selectedButton={selectedButton}
      />
      <ProductsDisplay data={filteredProducts || womenData} />
    </main>
  );
};

export default WomenPage;
