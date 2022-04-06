import React, { useState } from "react";
import {
  FaCheckSquare,
  FaRegPaperPlane,
  FaLink,
  FaTrashAlt,
} from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { BUG, STORY, TASK } from "../../../../constants/IssueType";
import Button from "../../../Utilities/Button";
import Dropdown from "../../../Utilities/Dropdown";
import TextArea from "../../../Utilities/TextArea";
const issueTypeList = [
  { icon: BUG, text: "Bug", key: 1 },
  { icon: STORY, text: "Story", key: 2 },
  { icon: TASK, text: "Task", key: 3 },
];

const EditIssue = ({ closeModal }) => {
  const [issueType, setIssueType] = useState("");
  const [title, setTitle] = useState(
    "Each issue has a single reporter but can have multiple assignees."
  );
  const [titleError, setTitleError] = useState("");
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);
  const [description, setDescription] = useState(
    "<h1>Try assigning Pickle Rick to okay this issue. 🥒 🥒 🥒</h1>"
  );
  const titleChanged = (event) => {
    setTitle(event.target.value);

    event.target.style.height = "";
    event.target.style.height = event.target.scrollHeight + 8 + "px";

    if (event.target.value.length > 200) {
      setTitleError("Must be at most 200 characters");
    } else if (event.target.value == "") {
      setTitleError("This field is required");
    } else {
      setTitleError("");
    }
  };
  const [edittedDescription, setEdittedDescription] = useState("");
  const save = () => {
    setDescription(edittedDescription);
    setIsDescriptionOpen(false);
  };
  return (
    <div className="w-full p-8">
      {/* Top Header */}
      <div className="flex justify-between">
        <div className="flex gap-2">
          {/* <Button>
            <FaCheckSquare className="text-blue-400" />
            <p className="text-sm uppercase text-gray-500">Task590759</p>
          </Button> */}
          <div className="w-32">
            <Dropdown
              fullList={issueTypeList}
              setValue={setIssueType}
              chevron={false}
              className="bg-white border-none"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <Button className="hover:bg-gray-100">
            <FaRegPaperPlane />
            <span>Give Feedback</span>
          </Button>
          <Button className="hover:bg-gray-100">
            <FaLink />
            <span>Copy Link</span>
          </Button>
          <Button className="hover:bg-gray-100">
            <FaTrashAlt />
          </Button>
          <Button className="hover:bg-gray-100" onClick={closeModal}>
            <GrClose />
          </Button>
        </div>
      </div>

      <div className="flex w-full gap-2">
        {/* Left Side */}
        <div className="w-7/12 ">
          <div className="py-2">
            <textarea
              className="w-full hover:bg-gray-200 focus:outline-blue-400 focus:bg-white text-2xl resize-none text-black p-2 h-auto"
              onChange={titleChanged}
              value={title}
            ></textarea>
            {titleError && (
              <div className="text-red-600 font-bold px-2 text-xs">
                {titleError}
              </div>
            )}
          </div>
          <div className="p-2 ">
            <h2 className="text-sm font-bold py-1">Description</h2>
            {/* <p className="text-2xl text-gray-900 py-1">Try assigning Pickle Rick to okay this issue. 🥒 🥒 🥒</p> */}
            {isDescriptionOpen ? (
              <div>
                <TextArea
                  onChange={(value) => setEdittedDescription(value)}
                  value={description}
                ></TextArea>
                <div className="flex py-2 gap-2">
                  <Button
                    className="bg-blue-700 text-white hover:bg-blue-500"
                    onClick={save}
                  >
                    Save
                  </Button>
                  <Button
                    className="hover:bg-gray-200"
                    onClick={() => setIsDescriptionOpen(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            ) : (
              <div
                onClick={() => setIsDescriptionOpen(true)}
                dangerouslySetInnerHTML={{ __html: description }}
              ></div>
            )}
          </div>
        </div>
        {/* Right Side */}
        <div className="grow">123</div>
      </div>
    </div>
  );
};
export default EditIssue;
