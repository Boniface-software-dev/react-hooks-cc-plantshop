import React, { useState, useEffect } from "react";
import PlantList from "./PlantList";
import SearchBar from "./SearchBar";
import AddPlantForm from "./AddPlantForm";

function App() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch plants from the server on component mount
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  // Add a new plant
  const handleAddPlant = (newPlant) => {
    setPlants([...plants, newPlant]);
  };

  // Mark a plant as sold out
  const handleToggleStock = (id) => {
    setPlants((plants) =>
      plants.map((plant) =>
        plant.id === id ? { ...plant, isSoldOut: !plant.isSoldOut } : plant
      )
    );
  };

  // Filter plants based on search term
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Plantsy</h1>
      <SearchBar searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <AddPlantForm onAddPlant={handleAddPlant} />
      <PlantList plants={filteredPlants} onToggleStock={handleToggleStock} />
    </div>
  );
}

export default App;