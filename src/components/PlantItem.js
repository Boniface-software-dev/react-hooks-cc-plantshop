import React from "react";

function PlantItem({ plant, onToggleStock }) {
  return (
    <li data-testid="plant-item">
      <h4>{plant.name}</h4>
      <img src={plant.image} alt={plant.name} />
      <p>Price: {plant.price}</p>
      <button onClick={onToggleStock}>
        {plant.isSoldOut ? "Out of Stock" : "In Stock"}
      </button>
    </li>
  );
}

export default PlantItem;