import React from "react";
import "./index.css";

function DropDown({ items, onChange }) {
  if (!items) {
    return null;
  }
  return (
    <select onChange={onChange}>
      {items.map((value, i) => (
        <option key={i} {...value} />
      ))}
    </select>
  );
}

export default DropDown;
