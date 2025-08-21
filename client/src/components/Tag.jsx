import React from "react";

export default function Tag(props) {
  const { label, onClick } = props;
  return (
    <button className="tag" onClick={onClick} type="button">
      {label}
    </button>
  );
}
