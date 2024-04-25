import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

//child component//
const FoodCart = ({ id, name, desc, price, rating, img, handleToast }) => {
  const dispatch = useDispatch();
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
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-500" />
          {rating}
        </span>
        <button
          className="p-1 text-white bg-green-500 text-sm rounded-lg hover:bg-green-600"
          onClick={() => {
            dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
            handleToast(name);
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
