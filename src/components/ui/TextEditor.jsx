"use client";

import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { Label } from "./Label";

const TextEditor = ({ title = "", id, width = "w-[32%]", value, onChange,height="h-[8.5rem]" }) => {
  return (
    <div className={`${width} flex flex-col gap-1.5 my-2`}>
      <Label htmlFor={id}>{title}</Label>
      <ReactQuill
        className={`${height}`}
        theme="snow"
        value={value}
        onChange={(content) => onChange(content, id)} // Pass the content and id to the handler
        id={id} // For semantics or debugging
        name={id} // Optional, same purpose as id
      />
    </div>
  );
};

export default TextEditor;
