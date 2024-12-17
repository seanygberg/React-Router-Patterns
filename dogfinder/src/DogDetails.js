import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";

const DogDetails = ({ dogs }) => {
  const { name } = useParams();
  const dog = dogs.find((d) => d.name.toLowerCase() === name.toLowerCase());

  if (!dog) {
    return <Navigate to="/dogs" />;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} style={{ width: "300px" }} />
      <h2>Age: {dog.age}</h2>
      <ul>
        {dog.facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>
      <Link to="/dogs">Go Back</Link>
    </div>
  );
};

export default DogDetails;
