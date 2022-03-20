import React from "react";
import {FaBookmark} from 'react-icons/fa';
const SearchItem = ({issue})=>{
    return <div className="flex gap-4 items-center p-2 hover:bg-gray-200 cursor-pointer">
        <p><FaBookmark className="text-green-600 text-xl" /></p>
        <div className="leading-3">
            <h1 className="font-sans">You can use rich text with images in issue descriptions.</h1>
            <p className="text-sm text-gray-600 uppercase ">Story-590765</p>
        </div>
    </div>
}

export default SearchItem;