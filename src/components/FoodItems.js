import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "../data/FoodData.js";

const FoodItems = () => {
  return (
    <div>
      .
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
