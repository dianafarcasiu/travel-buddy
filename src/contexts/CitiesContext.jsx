import { createContext, useContext, useEffect, useState } from "react";

const CitiesContext = createContext();

function CitiesProvider({ children }) {
  const [cities, setCities] = useState(
    JSON.parse(localStorage.getItem("cities")) || []
  );

  useEffect(
    function () {
      localStorage.setItem("cities", JSON.stringify(cities));
    },
    [cities]
  );

  function createCity(newCity) {
    setCities((cities) => [...cities, newCity]);
  }
  function deleteCity(id) {
    const filteredCities = cities.filter((city) => city.id !== id);
    setCities(filteredCities);

    localStorage.setItem("cities", JSON.stringify(filteredCities));
  }

  return (
    <CitiesContext.Provider value={{ cities, createCity, deleteCity }}>
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (context === undefined)
    throw new Error("Cities Provider used outside the Cities Context.");
  return context;
}

export { CitiesProvider, useCities };
