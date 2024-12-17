import React from "react";
import { Link } from "react-router-dom";

const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>Available Colors</h1>
      <ul>
        {colors.map((color) => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
      <Link to="/colors/new">
        <button>Add New Color</button>
      </Link>
    </div>
  );
};

export default ColorList;
