import React from "react";
import { FaStar } from "react-icons/fa";
//child component//
const FoodCart = ({ id, name, desc, price, rating, img }) => {
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg">
      <img
        src={img}
        alt=""
        className="w-auto h-[130px] cursor-grab transition-all duration-500 hover:scale-110"
      />
      <div className="flex justify-between tex-sm">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc}</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-500" />
          {rating}
        </span>
        <button className="p-1 text-white bg-green-500 text-sm rounded-lg hover:bg-green-600">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
