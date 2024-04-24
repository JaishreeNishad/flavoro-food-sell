import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = () => {
  return (
    <div className="flex shadow-md mb-3 rounded-md gap-2 p-2">
      <MdDelete className="cursor-pointer text-gray-600 absolute right-7" />
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-[50px] h-[50px]"
      />

      <div className="leading-5">
        <h3 className="font-bold text-gray-800">Onion Pizza</h3>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹150</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus className="text-gray-600 ease-linear cursor-pointer border-2 border-gray-600 hover:border-none hover:bg-green-500 hover:text-white p-1 text-xl rounded-md transition-none" />
            <span className="text-green-500">1</span>
            <AiOutlineMinus className="text-gray-600 ease-linear cursor-pointer border-2 border-gray-600 hover:border-none hover:bg-green-500 hover:text-white p-1 text-xl rounded-md transition-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
