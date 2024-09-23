import { useCities } from "../contexts/CitiesContext";
import CountryItem from "./CountryItem";
import Message from "./Message";

function CountriesList() {
  const { cities } = useCities();
  const countries = [
    ...new Map(cities.map((city) => [city.country, city.emoji]))
      .entries()
      .map(([country, emoji]) => ({ country, emoji })),
  ];

  if (!cities.length)
    return <Message>Click on the map to start adding countries!</Message>;

  return (
    <ul className="grid grid-cols-2 gap-6 w-[85%] mx-auto">
      {countries.map((country) => (
        <CountryItem country={country} key={country.country} />
      ))}
    </ul>
  );
}

export default CountriesList;
