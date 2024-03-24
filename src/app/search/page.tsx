"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../components/ProductCard";
import { Product } from "../../../interfaces";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase";

const Search = () => {
  const [queryParams, setQueryParams] = useState<string>("");
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [productNames, setProductNames] = useState<string[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  const searchParams = useSearchParams();
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setQueryParams(query);
    }

    console.log(queryParams);
  }, [searchParams, queryParams]);

  useEffect(() => {
    if (queryParams.length > 0) {
      const fetchProductNames = async () => {
        const collectionRef = collection(db, "products");
        const queryRef = query(collectionRef);
        const querySnap = await getDocs(queryRef);
        const names = querySnap.docs.map((doc) => doc.data().name);
        setProductNames(names);
      };

      fetchProductNames();
    }
  }, [queryParams]);

  useEffect(() => {
    if (productNames.length > 0) {
      const filteredResults = productNames.filter((name) =>
        name.toLowerCase().includes(queryParams.toLowerCase())
      );
      setSearchResults(filteredResults);
    }
  }, [productNames, queryParams]);

  useEffect(() => {
    if (searchResults.length > 0) {
      const fetchFilteredProducts = async () => {
        const collectionRef = collection(db, "products");
        const q = query(collectionRef, where("name", "in", searchResults));
        const querySnap = await getDocs(q);

        querySnap.forEach((doc) => {
          const data = doc.data() as Product;

          setFilteredProducts((prev) => [...prev, data]);
        });
      };

      fetchFilteredProducts();
    }
  }, [searchResults]);

  useEffect(() => {
    console.log("searchResults", searchResults);
  }, [searchResults]);

  return (
    <main className="relative top-20 p-2">
      <h1>results for &apos;{queryParams}&apos;</h1>
      <div className="grid grid-cols-2 justify-center">
        {filteredProducts?.map((result: Product, index) => (
          <ProductCard
            name={result.name}
            key={result.id}
            price={result.price}
            description={result.description}
            quantity={result.quantity}
            type={result.type}
            imageUrl={result.imageUrl}
            id={result.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Search;
