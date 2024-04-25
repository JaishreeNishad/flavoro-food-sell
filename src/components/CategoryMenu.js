import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CtegorySlice";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
    console.log(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectCategory = useSelector((state) => state.category.category);
  return (
    <div className="ml-6">
      <h3 className="text-xl font-semibold">Find the best food</h3>
      <div className="my-5 flex gap-3 overflow-x-scroll md:overflow-x-hidden scroll-smooth">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={`px-3 py-2 rounded-lg font-bold  bg-gray-200 hover:bg-green-500 hover:text-white ${
            selectCategory === "ALL" && "bg-green-500 text-white"
          } `}
        >
          All
        </button>
        {categories.map((category, index) => {
          return (
            <button
              key={index}
              onClick={() => dispatch(setCategory(category))}
              className={`px-3 py-2 rounded-lg font-bold  bg-gray-200 hover:bg-green-500 hover:text-white ${
                selectCategory === category && "bg-green-500 text-white"
              } `}
            >
              {category}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryMenu;
