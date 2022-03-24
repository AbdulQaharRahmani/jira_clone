import React from "react";
import {FaSearch , FaBookmark , FaArrowUp} from 'react-icons/fa';
import Contributers from "../../../Utilities/Contributers/Contributers";

const Issue = ()=>{

    return <div className="p-1 px-2 bg-white mb-1 rounded shadow-md  cursor-pointer hover:bg-gray-200">
        <p className="">Each issue has a single reporter but can have multiple assignees.</p>
        <div className="flex justify-between pt-3 items-center">
            <div className="flex gap-1">
                <FaBookmark className="text-green-400 "/>
                <FaArrowUp className="text-red-400"/>
            </div>
            <div>
                <Contributers className="w-7 h-7" hover={false} />
            </div>
        </div>
    </div>
}
export default Issue;