import React from "react";
import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";
const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-16 flex">
        <Navigation />
      </div>
    </div>
  );
};

export default Layout;
