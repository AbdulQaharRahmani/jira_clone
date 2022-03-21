import React, { useState } from "react";
import Dropdown from "../../../Utilities/Dropdown";
import Modal from "../../../Utilities/Modal";
import TextArea from "../../../Utilities/TextArea";
const CreateIssue = () => {
  const [issueType, setIssueType] = useState({});

  return (
    <div className="p-6">
      <h1 className="font-bold text-xl pb-6">Create Issue</h1>
      <p className="text-sm font-bold py-1 text-gray-600">Issue Type</p>
      <Dropdown setValue={setIssueType} />
      <p className="text-sm py-1 text-gray-600">
        Start typing to get a list of possible matches.
      </p>

      <div className="border-t border-gray-600 my-6"></div>

      <p className="text-sm font-bold py-1 text-gray-600">Short Summary</p>
      <input
        type="text"
        className="w-full py-1 px-1 text-black border border-gray-400 bg-gray-100 hover:bg-gray-200 focus:outline-none"
      />
      <p className="text-sm py-1 text-gray-600">
        Concisely summarize the issue in one or two sentences.
      </p>

      <div className="my-4">
        <p className="text-sm font-bold py-1 text-gray-600">Description</p>
        <TextArea />
        <p className="text-sm py-1 text-gray-600">
          Describe the issue in as much detail as you'd like.
        </p>
      </div>

      <div>
        <p className="text-sm font-bold py-1 text-gray-600">Reporter</p>
        <Dropdown setValue={setIssueType} />
        <p className="text-sm py-1 text-gray-600">
          Start typing to get a list of possible matches.
        </p>
      </div>
      <div>
        <p className="text-sm font-bold py-1 text-gray-600">Reporter</p>
        <Dropdown setValue={setIssueType} />
        <p className="text-sm py-1 text-gray-600">
          Start typing to get a list of possible matches.
        </p>
      </div>
    </div>
  );
};

export default CreateIssue;
