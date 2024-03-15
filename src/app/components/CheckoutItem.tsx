import Image from "next/image";
import React from "react";
import DeleteFavBtn from "./DeleteFavBtn";

const CheckoutItem = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-40 w-screen roboto-mono">
        <div className="h-full overflow-hidden">
          <Image
            src="/images/pexels-ksenia-chernaya-11741419.jpg"
            alt=""
            height={100}
            width={100}
            className="object-cover w-full"
          />
        </div>
        <div className="flex flex-col p-4 w-full">
          <div className="flex justify-between">
            <div className="flex flex-col">
              <span>Product Name</span>
              <span>£££</span>
              <span className="text-sm mt-2">Quantity: <span>1</span></span>
            </div>
            <div>
              <DeleteFavBtn />
            </div>
          </div>
        </div>
      </div>
      <hr className="w-4/5 h-[2px] bg-black m-3" />
    </div>
  );
};

export default CheckoutItem;
