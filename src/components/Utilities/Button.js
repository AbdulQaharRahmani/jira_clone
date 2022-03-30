import React from "react";

const Button = ({ children, className, onClick }) => {
  return (
    <button onClick={onClick} className={`px-2 py-1 text-gray-600  rounded flex items-center gap-1 ${className}`}>
      {children}
    </button>
  );
};
export default Button;
