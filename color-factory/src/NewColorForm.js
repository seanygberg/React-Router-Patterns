import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ addColor }) => {
  const [color, setColor] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (color) {
      addColor(color);
      navigate("/");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a New Color</h1>
      <label htmlFor="color">Choose a Color:</label>
      <input
        type="color"
        id="color"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <button type="submit">Add Color</button>
    </form>
  );
};

export default NewColorForm;
