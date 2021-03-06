import React, { useEffect, useRef } from "react";
import Quill from "quill";
import "quill/dist/quill.snow.css";

const TextArea = ({ children, onChange, value }) => {
  const textAreaRef = useRef(null);
  useEffect(() => {
    const quill = new Quill(textAreaRef.current, {
      modules: {
        toolbar: [
          ["bold", "italic", "underline", "strike"],
          ["blockquote", "code-block"],
          [{ list: "ordered" }, { list: "bullet" }],
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          [{ color: [] }, { background: [] }],
          ["clean"],
        ],
      },
      theme: "snow",
    });

    quill.on("text-change", function () {
        onChange(quill.root.innerHTML);
    });

    if (value) quill.clipboard.dangerouslyPasteHTML(0, value);
  }, []);

  return (
    <div>
      <div ref={textAreaRef} style={{ height: "130px" }}>
        {/* {children} */}
      </div>
    </div>
  );
};

export default TextArea;
