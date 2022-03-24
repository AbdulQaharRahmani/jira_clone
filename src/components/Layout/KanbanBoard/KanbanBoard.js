import React, { useState } from "react";
import BreadCrumb from "../../Utilities/BreadCrumb";
import Input from "../../Utilities/Input";
import Contributers from "../../Utilities/Contributers/Contributers";
import IssueContainer from "../Issue/Show/IssueContainer";
const KanbanBoard = ({ className }) => {
  const [issueActive, setIssueActive] = useState(false);
  const [recentlyUpdatedActive, setRecentlyUpdatedActive] = useState(false);
  const myIssueClick = () => {
    setIssueActive(!issueActive);
  };
  const recentlyUpdatedClick = (event) => {
    setRecentlyUpdatedActive(!recentlyUpdatedActive);
  };
  const clearAll = () => {
    setIssueActive(false);
    setRecentlyUpdatedActive(false);
  };

  return (
    <div className={`p-8 ${className}`}>
      {/* Header */}
      <div>
        <BreadCrumb />
        <h1 className="text-2xl font-bold py-2">Kanban board</h1>
        <div className="flex">
          <Input />
          <div className="px-4">
            <Contributers />
          </div>

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
      <div className="flex gap-2 h-96 items-stretch pt-8">
        <IssueContainer title="Backlog 1"></IssueContainer>
        <IssueContainer title="SELECTED FOR DEVELOPMENT 2"></IssueContainer>
        <IssueContainer title="IN PROGRESS 1"></IssueContainer>
        <IssueContainer title="DONE 2"></IssueContainer>
      </div>
    </div>
  );
};

export default KanbanBoard;
