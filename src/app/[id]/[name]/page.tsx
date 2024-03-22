"use client";
import { db } from "@/app/firebase";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Product } from "../../../../interfaces";
import Image from "next/image";
import AddToBasketBtn from "@/app/components/AddToBasketBtn";
import HeartButton from "@/app/components/HeartButton";

const ProductDetail = () => {
  const [product, setProduct] = useState<Product>({} as Product);
  const [liked, setLiked] = useState(false);
  const { id } = useParams();

  const parsedId = Array.isArray(id) ? id[0] : id;

  useEffect(() => {
    console.log(product);
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // fetch product data
  useEffect(() => {
    const fetchProductData = async () => {
      const collectionRef = collection(db, "products");
      const queryRef = query(
        collectionRef,
        where("id", "==", parseInt(parsedId))
      );
      const querySnap = await getDocs(queryRef);
      querySnap.forEach((doc) => {
        const data = doc.data() as Product;
        setProduct(data);
      });
    };

    fetchProductData();
  }, [parsedId]);

  const handleClick = () => {
    addToBasket();
  };

  const addToBasket = async () => {
    const docRef = doc(db, "basket", `${id}`);
    await setDoc(docRef, {
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      description: product.description,
      quantity: 1,
    });
  };

  const addToFavourites = async () => {
    const docRef = doc(db, "favourites", `${id}`);
    await setDoc(docRef, {
      id: product.id,
      imageUrl: product.imageUrl,
      name: product.name,
      price: product.price,
      description: product.description,
    });

    // Update liked state
    setLiked(true);

    // Update local storage
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updatedFavourites = [...favourites, id];
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  const removeFromFavourites = async () => {
    const docRef = doc(db, "favourites", `${id}`);
    await deleteDoc(docRef);

    // Update liked state
    setLiked(false);

    // Update local storage
    const favourites = JSON.parse(localStorage.getItem("favourites") || "[]");
    const updatedFavourites = favourites.filter(
      (favoriteId: number) => favoriteId !== product.id
    );
    localStorage.setItem("favourites", JSON.stringify(updatedFavourites));
  };

  return (
    <main className="relative top-20">
      <div className="flex flex-col relative bottom-40">
        {/* each image should have multiple images that can be scrolled through */}
        {product.imageUrl &&
          product.imageUrl.map((url, index) => (
            <div key={index}>
              <Image
                src={url}
                alt={product.name}
                height={500}
                width={500}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
      </div>
      <footer className="flex flex-col roboto-mono fixed bottom-0 w-full bg-white h-40">
        <div className="border-y border-black flex justify-center p-2">
          <AddToBasketBtn handleClick={handleClick} />
        </div>
        <div className="p-4 overflow-scroll flex flex-col gap-2">
          <div className="flex justify-between">
            <h2>{product.name}</h2>
            <HeartButton
              addToFavourites={addToFavourites}
              removeFromFavourites={removeFromFavourites}
              liked={liked}
            />
          </div>
          <p className="text-sm">{product.description}</p>
          <p>${product.price}</p>
        </div>
      </footer>
    </main>
  );
};

export default ProductDetail;
