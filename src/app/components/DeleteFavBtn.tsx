import React from "react";
import { Product } from "../../../interfaces";

const DeleteFavBtn = ({ id, removeFromFavourites }: { id: number, removeFromFavourites: (id: number) => void }) => {
  return (
    <button onClick={() => removeFromFavourites(id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={.7}
        stroke="currentColor"
        className="w-12 h-12"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18 18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default DeleteFavBtn;
