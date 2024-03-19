import React from "react";

const DeleteItemBtn = ({ id, handleDelete }: { id: number; handleDelete: (id: number) => void }) => {
  return (
    <button onClick={() => handleDelete(id)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1}
        stroke="currentColor"
        className="w-10 h-10"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
  );
};

export default DeleteItemBtn;
