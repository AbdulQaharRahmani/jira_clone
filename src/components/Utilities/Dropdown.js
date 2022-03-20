import React, { useEffect, useRef, useState } from "react";

import { FaSearch, FaChevronDown } from "react-icons/fa";
const Dropdown = ({ setValue }) => {
  const fullList = [
    { icon: <FaSearch />, text: "Ahmad", key: 1 },
    {
      image:
        "https://images.unsplash.com/photo-1647695095872-3bcf1b53659a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      text: "Karim",
      key: 2,
    },
    { icon: <FaSearch />, text: "Sattar", key: 3 },
  ];

  const [showBody, setShowBody] = useState(false);
  const [selected, setSelected] = useState(fullList[0]);
  const [searchText, setSearchText] = useState("");

  const [list, setList] = useState(fullList);
  const ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowBody(false);
    }
  };

  const itemClicked = (item) => {
    setSelected(item);
    setValue(item);
    setShowBody(false);
  };

  const closeButtonClicked = () => {
    setSelected("");
    setValue("");
    setSearchText("");
    setList(fullList);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const searchList = (searchText) => {
    if (searchText=="") return setList(fullList);

    const newArr = [...fullList].filter((item) =>
        item.key !== selected.key && 
      item.text.toLowerCase().includes(searchText.toLowerCase()) 
    );
    setList(newArr);
  };

  return (
    <div className="relative" ref={ref}>
      {/* Header */}
      <div>
        <div
          className="flex justify-between items-center border border-gray-400 px-4 py-1 cursor-pointer bg-gray-100 hover:bg-gray-200 rounded"
          onClick={() => setShowBody(true)}
        >
          {selected ? (
            <div className="flex gap-2 items-center">
              <div className="w-5 h-5">
                {selected.icon || (
                  <img
                    src={selected.image}
                    className="rounded-full w-full h-full"
                  />
                )}
              </div>
              <p>{selected.text}</p>
            </div>
          ) : (
            <div className="text-gray-400">Select</div>
          )}
          <FaChevronDown />
        </div>
      </div>
      {/* Body */}
      <div
        className={`shadow border absolute rounded top-9 w-full ${
          !showBody ? "hidden" : ""
        } bg-white`}
      >
        <div className="flex ">
          <input
            value={searchText}
            type="text"
            className="w-full grow py-2 px-4 focus:outline-none"
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
              searchList(e.target.value);
            }}
          />
          { selected && <p
            className="py-1 px-4 text-xl text-gray-400 hover:text-gray-800 font-bold cursor-pointer"
            onClick={closeButtonClicked}
          >
            x
          </p>}
        </div>

        {list.length === 0 ? (
          <div className="px-4 text-gray-500 py-2">No Results</div>
        ) : (
          list.map((item) => (
              item.key !== selected.key && 
            <div
              onClick={() => itemClicked(item)}
              className="flex items-center  gap-2 hover:bg-blue-200 px-4 py-2 cursor-pointer"
              key={item.key}
            >
              <div className="w-5 h-5">
                {item.icon || (
                  <img
                    src={item.image}
                    className="rounded-full w-full h-full"
                  />
                )}
              </div>
              <p>{item.text}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dropdown;
