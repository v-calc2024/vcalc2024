import React from "react";

export function TextareaInput({
  name,
  placeholder = "Make a comment",
  comment = "",
  handleCommentChange,
}: {
  name: string;
  placeholder?: string;
  comment?: string;
  handleCommentChange: any;
}) {
  return (
    <>
      <textarea
        name={name}
        id={name}
        rows={8}
        placeholder={placeholder}
        value={comment}
        onChange={handleCommentChange}
      />
      <style jsx>{`
        textarea {
          width: 100%;
          resize: none;
          padding: 1rem;
          box-sizing: border-box;
          border: solid 1px var(--border-color);
          border-radius: 1rem;
        }
      `}</style>
    </>
  );
}

export default TextareaInput;
