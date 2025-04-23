import React from "react";
import PlantItem from "./PlantItem";

function PlantList({ plants, onToggleStock }) {
  return (
    <ul>
      {plants.map((plant) => (
        <PlantItem
          key={plant.id}
          plant={plant}
          onToggleStock={() => onToggleStock(plant.id)}
        />
      ))}
    </ul>
  );
}

export default PlantList;