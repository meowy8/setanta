import React from "react";
import FavouritesItem from "../components/FavouritesItem";

const Favourites = () => {
  return (
    <main className="relative top-20 ">
      <h1 className="ovo m-2 text-3xl">Favourites</h1>
      <FavouritesItem />
      <FavouritesItem />
      <FavouritesItem />
    </main>
  );
};

export default Favourites;
