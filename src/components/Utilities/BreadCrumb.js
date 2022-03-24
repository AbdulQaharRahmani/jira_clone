import React from "react";

const BreadCrumb = () => {
  const titles = ["Projects", "singularity 1.0", "Kanban Board"];
  return (
    <div className="flex text-gray-500">
      {titles.map((item, index) => (
        <div key={index}>
          {item}
          {titles.length - 1 !== index && <span className="px-2">/</span>}
        </div>
      ))}
    </div>
  );
};
export default BreadCrumb;
