import React from "react";

const RemainingContributerCount = ({ size }) => {
  return (
    <span
      className="flex items-center justify-center w-9 h-9 text-sm rounded-full hover:-translate-y-1 -ml-1 transition-all duration-200 cursor-pointer text-center bg-gray-300 border-2 border-white"
    >
      +{size}
    </span>
  );
};

export default RemainingContributerCount;
