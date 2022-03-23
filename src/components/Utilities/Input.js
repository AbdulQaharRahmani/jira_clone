import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
const Input = ({ value = "", onChange, icon }) => {
  const [backgroundColor, setBackgroundColor] = useState("bg-gray-200");
  return (
    <div
      className={`relative  items-center border border-gray-400  gap-2 rounded ${backgroundColor}`}
    >
      <div className="absolute top-1/2 left-2 -translate-y-1/2 pointer-events-none text-gray-600 text-sm">
        <FaSearch />{" "}
      </div>
      <input
        type="text"
        className="bg-transparent  py-1 px-2 pl-8 grow-1 focus:outline-none w-full"
        onChange={onChange}
        onBlur={() => setBackgroundColor("bg-gray-200")}
        onFocus={() => setBackgroundColor("bg-white")}
      />
    </div>
  );
};
export default Input;
