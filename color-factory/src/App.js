import React, { useState } from "react";
import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ColorList from "./ColorList";
import ColorDetail from "./ColorDetail";
import NewColorForm from "./NewColorForm";

function App() {
  const [colors, setColors] = useState(["red", "blue", "green"]);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  const colorExists = (color) => colors.includes(color);


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/colors" element={<ColorList colors={colors} />} />
          <Route path="/colors/new" element={<NewColorForm addColor={addColor} />} />
          <Route path="/colors/:color" element={<ColorDetail colorExists={colorExists} />} />
          <Route path="/*" element={<Navigate to="/colors" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
