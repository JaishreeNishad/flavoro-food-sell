import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { MdShoppingCart } from "react-icons/md";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(true);
  const cartItems = useSelector((state) => state.cart.cart);

  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (totalPrice, item) => totalPrice + item.qty * item.price,
    0
  );
  console.log(cartItems, "array");
  return (
    <>
      <div
        className={`top-0 right-0  w-full  h-full lg:w-[20vw] bg-white fixed p-5 ${
          activeCart ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 z-50`}
      >
        <div className="flex justify-between my-3">
          <span className="font-bold text-xl text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="text-gray-600 cursor-pointer hover:text-red-300 border-2 border-gray-600 hover:border-red-300 font-bold p-1 text-xl rounded-md"
          />
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <ItemCard
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="font-bold flex text-xl justify-center items-center">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount :{totalPrice}
          </h3>
          <hr className="w-[90vw] md:w-[18vw] my-2" />
          <button className="text-white px-3 py-2 bg-green-600 font-bold mb-5 w-[90vw] md:w-[18vw] rounded-lg">
            Checkout
          </button>
        </div>
      </div>
      <MdShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white bottom-4 right-4 shadow-md fixed text-5xl ${
          totalQty > 0 && "animate-bounce duration-500 transition-all"
        }}`}
      />
    </>
  );
};

export default Cart;
