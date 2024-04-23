import React from "react";

const Navbar = () => {
  return (
    <nav className="flex flex-col lg:flex-row justify-between py-3 mx-6">
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