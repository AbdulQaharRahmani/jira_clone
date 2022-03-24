import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Input = ({ value = "", onChange, icon }) => {
  
  return (
    <div
      className={`relative  items-center w-40 border border-gray-400 rounded bg-gray-100`}
    >
      <div className="absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none text-gray-600 text-sm">
        <FaSearch />{" "}
      </div>
      <input
        type="text"
        className="bg-transparent rounded py-1  px-2 pl-8 grow-1 focus:outline-none focus:bg-white w-full"
        onChange={onChange}
      />
    </div>
  );
};
export default Input;
