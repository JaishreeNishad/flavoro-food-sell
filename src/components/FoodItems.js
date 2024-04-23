import React from "react";
import FoodCart from "./FoodCart";
import FoodData from "../data/FoodData.js";
// parent component//
const FoodItems = () => {
  return (
    <div>
      {FoodData.map((food) => {
        return <FoodCart key={food.id} />;
      })}
    </div>
  );
};

export default FoodItems;
