import React from "react";
const SidebarItem = ({show,click,title,children}) => {
  
  return (
    <div className="pl-5 py-3 hover:bg-blue-700" onClick={click}>
      <a href="#" className="flex items-center ">
        {children}
        {show && (
          <p className="pl-4 text-blue-50 text-xs font-bold uppercase">
            {title}
          </p>
        )}
      </a>
    </div>
  );
};
export default SidebarItem;
