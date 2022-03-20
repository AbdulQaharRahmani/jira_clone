import React from "react";
import SearchItem from "./SearchItem";
import { FaSearch } from "react-icons/fa";
const Search = ({ show, setShow }) => {
  return (
    <div className="p-6">
      <div className="pb-4">
        <div className="flex gap-2 items-center border-b-2 border-blue-700 rounded py-1">
          <FaSearch className="text-xl text-gray-600" />
          <input
            type="text"
            className="w-full focus:outline-none text-xl"
            placeholder="Search issues by summary, description"
          />
        </div>
      </div>
      <h1 className="text-gray-600 font-bold text-xs pb-2 pt-4 uppercase">
        Recent Issues
      </h1>
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
      <SearchItem />
    </div>
  );
};

export default Search;
