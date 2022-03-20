import React, { useState } from "react";
import logo from "../../../logo.svg";
import { FaSearch, FaPlus, FaRegQuestionCircle, FaReact } from "react-icons/fa";

import SidebarItem from "./SidebarItem";
import Search from "./Search/Search";
import Modal from "../../Utilities/Modal";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
                setShowModal(true);
                setIsSidebarOpen(false);
              }}
            >
              <FaSearch className="text-blue-100 text-xl" />
            </SidebarItem>
            {showModal && (
              
              <Modal show={showModal} setShow={setShowModal} className="left-0 h-full">
                <Search />
              </Modal>
            )}
            <SidebarItem show={isSidebarOpen} title="create issue">
              <FaPlus className="text-blue-100 text-xl" />
            </SidebarItem>
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
