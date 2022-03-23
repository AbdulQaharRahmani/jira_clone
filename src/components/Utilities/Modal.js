import React, { useEffect, useState } from "react";
import BackDrop from "./BackDrop";
import ReactDOM from 'react-dom';
const Modal = ({
  show,
  setShow,
  options: { backdrop = true, closeButton = false } = {},
  children,
  className,
}) => {
  
  return (
    <div>
      {show && (
        <div>
          {backdrop && <BackDrop click={() => setShow(false)} />}
          <div
            className="fixed h-screen w-full top-0 overflow-y-auto z-50"
            onClick={() => setShow(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className={`absolute w-1/2 text-gray-600 bg-white shadow-xl z-50 ${className} `}
            >
              {closeButton && (
                <button
                  onClick={() => setShow(false)}
                  className="absolute top-2 text-2xl hover:text-blue-600 -right-6 z-50 bg-white py-2 px-4 border border-gray-200 shadow"
                >
                  X
                </button>
              )}
             {children}
            </div>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
