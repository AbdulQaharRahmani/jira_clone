import React, { useEffect, useState } from "react";
import BackDrop from "./BackDrop";
const Modal = ({
  show,
  setShow,
  options: { backdrop = true, closeButton = false } = {},
  children,
  className
}) => {

  
  return (
    <div>
      {show && (
        <div>
          <BackDrop click={() => setShow(false)} />
          <div className={`fixed w-1/2 p-3  top-1/2 left-1/2 -translate-y-1/2 bg-white text-gray-800 shadow-xl z-50 opacity-100 ${className} `}>
            {children}
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
