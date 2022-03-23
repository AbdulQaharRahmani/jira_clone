import React, { useState } from "react";
import logo from "../../../logo.svg";
import { FaSearch, FaPlus, FaRegQuestionCircle, FaReact } from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import Search from "../Issue/Search/Search";
import Modal from "../../Utilities/Modal";
import CreateIssue from "../Issue/Create/CreateIssue";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showSearchIssue, setShowSearchIssue] = useState(false);
  const [showCreateIssue, setShowCreateIssue] = useState(false);

  return (
    <div
      className={`fixed top-0 left-0 z-30 bg-blue-800 ${
        isSidebarOpen ? "w-48" : "w-16"
      } min-h-screen `}
      onMouseEnter={() => setIsSidebarOpen(true)}
      onMouseLeave={() => setIsSidebarOpen(false)}
    >
      <div className=" min-h-screen py-6 flex flex-col justify-between ">
        <div>
          <div className="pb-4">
            <SidebarItem>
              <FaReact className="text-blue-100 text-2xl" />
            </SidebarItem>
          </div>
          <div>
            <SidebarItem
              title="search issues"
              show={isSidebarOpen}
              click={() => {
                setShowSearchIssue(true);
                setIsSidebarOpen(false);
              }}
            >
              <FaSearch className="text-blue-100 text-xl" />
            </SidebarItem>
            {showSearchIssue && (
              <Modal
                show={showSearchIssue}
                options={{ closeButton: true }}
                setShow={setShowSearchIssue}
                className="left-0 top-0 h-full w-5/12"
              >
                <Search />
              </Modal>
            )}
            <SidebarItem
              show={isSidebarOpen}
              title="create issue"
              click={() => {
                setShowCreateIssue(true);
                setIsSidebarOpen(false);
              }}
            >
              <FaPlus className="text-blue-100 text-xl" />
            </SidebarItem>
            {showCreateIssue && (
              <Modal
                show={showCreateIssue}
                setShow={setShowCreateIssue}
                className="top-10 left-1/2 -translate-x-1/2"
              >
                <CreateIssue />
              </Modal>
            )}
          </div>
          
        </div>
        <div>
          <SidebarItem show={isSidebarOpen} title="About">
            <FaRegQuestionCircle className="text-blue-100 text-xl" />
          </SidebarItem>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
