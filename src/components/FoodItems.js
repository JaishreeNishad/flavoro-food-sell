import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { UseSelector, useSelector } from "react-redux";

const FoodItems = () => {
  const handleToast = (name) => toast.success(`Added ${name}`);
  const category = useSelector((state) => state.category.category);

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.filter((food) => {
          if (category === "All") {
            return food;
          } else {
            return category === food.category;
          }
        }).map((food) => {
          return (
            //data pass parent to child using props//
            <FoodCart
              key={food.id}
              id={food.id}
              name={food.name}
              price={food.price}
              img={food.img}
              desc={food.desc}
              rating={food.rating}
              handleToast={handleToast}
            />
          );
        })}
      </div>
    </>
  );
};

export default FoodItems;
