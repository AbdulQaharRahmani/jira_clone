import React from "react";
const BackDrop = ({ click }) => {
  return (
    <div
      className="w-full h-full fixed top-0 left-0 bg-gray-900 opacity-50 z-40"
      onClick={click}
    ></div>
  );
};

export default BackDrop;
