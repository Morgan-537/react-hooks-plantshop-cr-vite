import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";
 
function PlantPage() {
  // State for all plants fetched from backend
  const [plants, setPlants] = useState([]);
  // State for search query
  const [search, setSearch] = useState("");
 
  // Fetch all plants on page load
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((res) => res.json())
      .then((data) => setPlants(data));
  }, []);
 
  // Add a new plant to state after POST
  function handleAddPlant(newPlant) {
    setPlants((prev) => [...prev, newPlant]);
  }
 
  // Filter plants by search query
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(search.toLowerCase())
  );
 
  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search search={search} onSearchChange={setSearch} />
      <PlantList plants={filteredPlants} />
    </main>
  );
}
 
export default PlantPage;
 