import Image from "next/image";
import React from "react";
import DeleteFavBtn from "./DeleteFavBtn";

const FavouritesItem = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-between h-80 w-screen roboto-mono">
        <div className="h-full overflow-hidden">
          <Image
            src="/images/pexels-ksenia-chernaya-11741419.jpg"
            alt=""
            height={250}
            width={250}
            className="object-cover"
          />
        </div>
        <div className="flex flex-col p-4 w-72">
          <div className="flex justify-between ">
            <div className="flex flex-col">
              <span>Product Name</span>
              <span>£££</span>
            </div>
            <div>
              <DeleteFavBtn />
            </div>
          </div>
          <div className="flex items-end justify-end h-full">
            <button>Add to Basket</button>
          </div>
        </div>
      </div>
      <hr className="w-4/5 h-[2px] bg-black m-3" />
    </div>
  );
};

export default FavouritesItem;
