import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";

const ItemCard = ({ id, name, qty, price, img }) => {
  return (
    <div className="flex shadow-md mb-3 rounded-md gap-2 p-2">
      <MdDelete className="cursor-pointer text-gray-600 absolute right-7" />
      <img src={img} alt="" className="w-[50px] h-[50px]" />

      <div className="leading-5">
        <h3 className="font-bold text-gray-800">{name}</h3>
        <div className="flex justify-between">
          <span className="text-green-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlinePlus className="text-gray-600 ease-linear cursor-pointer border-2 border-gray-600 hover:border-none hover:bg-green-500 hover:text-white p-1 text-xl rounded-md transition-none" />
            <span className="text-green-500">{qty}</span>
            <AiOutlineMinus className="text-gray-600 ease-linear cursor-pointer border-2 border-gray-600 hover:border-none hover:bg-green-500 hover:text-white p-1 text-xl rounded-md transition-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
