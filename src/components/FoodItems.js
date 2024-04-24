import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "../data/FoodData.js";

const FoodItems = () => {
  return (
    <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
      {FoodData.map((food) => {
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
          />
        );
      })}
    </div>
  );
};

export default FoodItems;
