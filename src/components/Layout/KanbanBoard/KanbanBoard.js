import React, { useState } from "react";
import BreadCrumb from "../../Utilities/BreadCrumb";
import Input from "../../Utilities/Input";
import Contributers from "../../Utilities/Contributers/Contributers";
const KanbanBoard = ({ className }) => {
  const [issueActive, setIssueActive] = useState(false);
  const [recentlyUpdatedActive, setRecentlyUpdatedActive] = useState(false);
  const myIssueClick = () => {
    setIssueActive(!issueActive);
  };
  const recentlyUpdatedClick = (event) => {
    setRecentlyUpdatedActive(!recentlyUpdatedActive);
  };
  const clearAll = ()=>{
      setIssueActive(false);
      setRecentlyUpdatedActive(false);
  }

  return (
    <div className={`p-8 ${className}`}>
      {/* Header */}
      <div>
        <BreadCrumb />
        <h1 className="text-2xl font-bold py-2">Kanban board</h1>
        <div className="flex">
          <Input />
          <Contributers />
          <div className="flex gap-2">
            <button
              className={`${
                issueActive
                  ? " bg-blue-200 text-blue-900 "
                  : " hover:bg-gray-200 "
              } px-2 text-gray-600  rounded `}
              onClick={myIssueClick}
            >
              Only My Issues
            </button>
            <button
              className={`${
                recentlyUpdatedActive
                  ? " bg-blue-200 text-blue-900 "
                  : " hover:bg-gray-200 "
              } hover:bg-gray-200 px-2 text-gray-600 rounded `}
              onClick={recentlyUpdatedClick}
            >
              Recently Updated
            </button>
            {(issueActive || recentlyUpdatedActive) && (
              <span className="border-r border-gray-400"></span>
            )}
            {(issueActive || recentlyUpdatedActive) && (
              <button
                className=" px-2 text-gray-600 rounded"
                onClick={clearAll}
              >
                Clear All
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Body */}
    </div>
  );
};

export default KanbanBoard;
