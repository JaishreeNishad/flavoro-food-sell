import React from "react";
import { FaStar } from "react-icons/fa";

const FoodCart = () => {
  return (
    <div className="font-bold w-[250px] p-5 bg-white flex flex-col rounded-lg">
      <img
        src="https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5"
        alt=""
        className="w-auto h-[130px] cursor-grab transition-all duration-500 hover:scale-110"
      />
      <div className="flex justify-between tex-sm">
        <h2>Onion Pizza</h2>
        <span className="text-green-500">₹180</span>
      </div>
      <p className="text-sm font-normal">
        A delicious pizza topped with fresh onions for a delightful flavor
        combination.
      </p>
      <div className="flex justify-between">
        <span className="flex justify-center items-center">
          <FaStar className="mr-1 text-yellow-500" />
          4.5
        </span>
        <button className="p-1 text-white bg-green-500 text-sm rounded-lg hover:bg-green-600">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCart;
