"use client";

import { Label } from "./Label";

const TextEditor = ({
    title = "",
    id,
    width = "w-[32%]",
    value,
    onChange,
    height = "h-[8.5rem]"
}) => {
    return (
        <div className={`${width} flex flex-col gap-1.5 my-2`}>
            <Label htmlFor={id}>{title}</Label>
            <textarea
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                className={`border border-gray-300 rounded-md p-2 ${height} resize-none focus:outline-none focus:ring-2 focus:ring-blue-500`}
                placeholder={`Enter ${title.toLowerCase()} here...`}
            />
        </div>
    );
};

export default TextEditor;
