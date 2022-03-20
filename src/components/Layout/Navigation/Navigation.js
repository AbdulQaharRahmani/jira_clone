import React from "react";
import second_logo from "../../../second_logo.png";
import { FaSearch } from "react-icons/fa";
import { FiSettings, FiTruck, FiServer } from "react-icons/fi";
import { AiOutlineRise, AiOutlineInbox } from "react-icons/ai";
import { CgClapperBoard, CgNotes } from "react-icons/cg";
import NavItem from "./NavItem";
const Navigation = () => {
  return (
    <div className="bg-gray-100 min-h-screen w-56 border-r border-gray-300 p-5">
      {/* Header */}
      <div className="flex">
        <img src={second_logo} />
        <div className="text-sm px-3 text-gray-600">
          <h1 className="font-bold">Singularity 1.0</h1>
          <p>Software Project</p>
        </div>
      </div>
      {/* Links start */}
      <div className="pt-8 pb-4">
        <NavItem title="Kanban Board" implemented={true}>
          <CgClapperBoard className="text-gray-700 text-xl" />
        </NavItem>
        <NavItem title="Project Setting" implemented={true}>
          <FiSettings className="text-gray-700 text-xl" />
        </NavItem>
      </div>
      <hr className="border-gray-400"></hr>
      <div className="pt-2">
        <NavItem title="Releases"  implemented={false}>
          <FiTruck className="text-gray-700 text-xl" />
        </NavItem>
        <NavItem title="Issues and Filters" implemented={false}>
          <FiServer className="text-gray-700 text-xl" />
        </NavItem>
        <NavItem title="Pages" implemented={false}>
          <CgNotes className="text-gray-700 text-xl" />
        </NavItem>
        <NavItem title="Reports" implemented={false}>
          <AiOutlineRise className="text-gray-700 text-xl" />
        </NavItem>
        <NavItem title="Components" implemented={false}>
          <AiOutlineInbox className="text-gray-700 text-xl" />
        </NavItem>
      </div>
    </div>
  );
};

export default Navigation;
