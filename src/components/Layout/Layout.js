import React from "react";
import KanbanBoard from "./KanbanBoard/KanbanBoard";
import Navigation from "./Navigation/Navigation";
import Sidebar from "./Sidebar/Sidebar";
const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div className="ml-16 flex">
        <Navigation />
          <KanbanBoard className="grow "/>
        
      </div>
    </div>
  );
};

export default Layout;
