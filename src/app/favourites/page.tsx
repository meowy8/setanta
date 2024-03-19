"use client";
import React, { useEffect, useState } from "react";
import FavouritesItem from "../components/FavouritesItem";
import {
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { Product } from "../../../interfaces";

const Favourites = () => {
  const [favourites, setFavourites] = useState<Product[]>([]);

  useEffect(() => {
    const fetchFavourites = async () => {
      const collectionRef = collection(db, "favourites");
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

      setFavourites([...newData]);
    };

    fetchFavourites();
  }, []);

  const removeFromFavourites = async (id: number) => {
    const docRef = doc(db, "favourites", `${id}`);
    await deleteDoc(docRef);
    setFavourites(favourites.filter((product) => product.id !== id));
    console.log("Document successfully deleted!");
  };

  return (
    <main className="relative top-20 ">
      <h1 className="ovo m-2 text-3xl">Favourites</h1>
      {favourites.length > 0 &&
        favourites.map((product: Product) => (
          <FavouritesItem
            key={product.id}
            name={product.name}
            price={product.price}
            imageUrl={product.imageUrl}
            id={product.id}
            description={product.description}
            removeFromFavourites={removeFromFavourites}
            quantity={product.quantity}
          />
        ))}
    </main>
  );
};

export default Favourites;
