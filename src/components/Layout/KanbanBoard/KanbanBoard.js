import React from "react";
import BreadCrumb from "../../Utilities/BreadCrumb";
import Input from "../../Utilities/Input";

const KanbanBoard = ({className})=>{
    return <div className={`p-8 ${className}`}>
        {/* Header */}
        <div>
            <BreadCrumb />
            <h1 className="text-2xl font-bold py-2">Kanban board</h1>
            <div className="flex">

            <Input />
            </div>
        </div>

        {/* Body */}
    </div>
}

export default KanbanBoard;