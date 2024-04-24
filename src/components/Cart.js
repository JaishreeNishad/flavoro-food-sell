import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);
  console.log(cartItems, "array");
  return (
    <>
      <div
        className={`top-0 right-0  w-full  h-full lg:w-[20vw] bg-white fixed p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between my-3">
          <span className="font-bold text-xl text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="text-gray-600 cursor-pointer hover:text-red-300 border-2 border-gray-600 hover:border-red-300 font-bold p-1 text-xl rounded-md"
          />
        </div>

        <ItemCard />
        <ItemCard />
        <ItemCard />
        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items :</h3>
          <h3 className="font-semibold text-gray-800">Total Amount :</h3>
          <hr className="w-[90vw] md:w-[18vw] my-2" />
          <button className="text-white px-3 py-2 bg-green-600 font-bold mb-5 w-[90vw] md:w-[18vw] rounded-lg">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
