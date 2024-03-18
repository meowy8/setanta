"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "../components/ProductCard";

interface SearchResults {
  id: string;
  name: string;
  price: {
    current: {
      text: number;
    };
  };
  additionalImagesUrls: [string];
}

const Search = () => {
  const [queryParams, setQueryParams] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchResults[]>([]);

  const searchParams = useSearchParams();
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setQueryParams(query);
    }

    console.log(queryParams);
  }, [searchParams, queryParams]);

  useEffect(() => {
    if (queryParams !== "") {
      const fetchSearchResults = async () => {
        const url = `https://asos10.p.rapidapi.com/api/v1/getProductListBySearchTerm?searchTerm=${queryParams}&currency=USD&country=US&store=US&languageShort=en&sizeSchema=US&limit=50&offset=0`;
        const options = {
          method: "GET",
          headers: {
            "X-RapidAPI-Key":
              "8cc9550550msh56b112eb1858bb7p1dc639jsna65c62ee76cd",
            "X-RapidAPI-Host": "asos10.p.rapidapi.com",
          },
        };

        try {
          const response = await fetch(url, options);
          const result = await response.json();
          setSearchResults(result.data?.products);
        } catch (error) {
          console.error(error);
        }
      };

      fetchSearchResults();
    }
  }, [queryParams]);

  useEffect(() => {
    console.log(searchResults);
  });

  return (
    <main className="relative top-20 p-2">
      <h1>results for &apos;{queryParams}&apos;</h1>
      <div className="grid grid-cols-2 justify-center">
        {searchResults?.map((result: SearchResults, index) => (
          <ProductCard
            name={result.name}
            key={result.id}
            price={result.price.current.text}
            imageUrl={"https://" + result?.additionalImagesUrls[0]}
            id={result.id}
          />
        ))}
      </div>
    </main>
  );
};

export default Search;
