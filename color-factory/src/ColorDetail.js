import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";

function ColorDetail({ colorExists }) {
  const { color } = useParams();

  if (!colorExists(color)) {
    return <Navigate to="/colors" />;
  }

  return (
    <div>
      <h1 style={{ color: color }}>This is {color}!</h1>
      <Link to="/colors">
        <button>Back to Colors</button>
      </Link>
    </div>
  );
};

export default ColorDetail;
