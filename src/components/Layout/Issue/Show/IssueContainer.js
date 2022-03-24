import React from "react";
import Issue from "./Issue";

const IssueContainer = ({title , children})=>{

    return <div className="w-full bg-gray-100 px-1 py-2  rounded">
        <h1 className="px-2 pt-1 pb-3 uppercase text-gray-500 text-xs">{title}</h1>
        
        <Issue />
        <Issue />
    </div>
}

export default IssueContainer;