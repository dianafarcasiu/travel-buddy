import { useCities } from "../contexts/CitiesContext";
import CityItem from "./CityItem";
import Message from "./Message";

function CitiesList() {
  const { cities } = useCities();

  if (!cities.length)
    return <Message>Click on the map to start adding cities!</Message>;

  return (
    <ul className="flex flex-col items-center">
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CitiesList;
