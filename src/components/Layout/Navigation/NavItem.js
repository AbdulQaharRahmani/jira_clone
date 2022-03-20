import React, { useState } from "react";
const NavItem = (props) => {
  const [showTitle, setShowTitle] = useState(props.title);

  const showCalculatedTitle = () => {
    if (!props.implemented) {
      setShowTitle(<div className="text-xs px-1 bg-gray-400">NOT IMPLEMENTED</div>);
    }
  };
  
  const hideCalculatedTitle = () => {
    if (!props.implemented) {
      setShowTitle(props.title);
    }
  };

  return (
    <div className={`px-2 py-3  ${!props.implemented ? 'cursor-not-allowed':'hover:bg-gray-200'}`} onMouseEnter={showCalculatedTitle} onMouseLeave={hideCalculatedTitle}>
      <div href="#" className={`flex items-center ${!props.implemented && 'cursor-not-allowed'} `} >
        {props.children}
        <div className="pl-4 text-gray-700 text-xs font-bold ">{showTitle}</div>
      </div>
    </div>
  );
};
export default NavItem;
