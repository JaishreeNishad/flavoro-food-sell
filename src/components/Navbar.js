import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10">
      <div className="">
        {/* toUTCString() returns a date object as a string, according to UTC: */}
        <h3 className="text-xl font-bold text-gray-600">
          {new Date().toUTCString().slice(0, 16)}
        </h3>
        <h1 className="text-2xl font-bold">Flavoro Foods</h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          id=""
          placeholder="Search here"
          autoComplete="off"
          className="text-sm p-3 border border-gray-400 rounded-lg outline-none w-[30s]"
        />
      </div>
    </nav>
  );
};

export default Navbar;
