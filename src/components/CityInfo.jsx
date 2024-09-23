import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import { useCities } from "../contexts/CitiesContext";

function CityInfo() {
  const { id } = useParams();
  const { cities } = useCities();
  const cityId = Number(id);
  const city = cities.find((city) => city.id === cityId);

  if (!city) return <p>City not found.</p>;

  return (
    <div className="text-box">
      <div className="row">
        <h6 className="label">City name</h6>
        <h3 className="text-xl font-bold">
          <span>{city.emoji}</span> {city.name}
        </h3>
      </div>

      <div className="row">
        <h6 className="label">You went to {city.name} on</h6>
        <h3>{city.date}</h3>
      </div>

      {city.notes && (
        <div className="row">
          <h6 className="label">Your notes</h6>
          <h3>{city.notes}</h3>
        </div>
      )}

      <div className="row">
        <h6 className="label">Learn more</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${city.name}`}
          target="_blank"
          className="underline text-amber-500"
        >
          Check out {city.name} on Wikipedia &rarr;
        </a>
      </div>

      <BackButton />
    </div>
  );
}

export default CityInfo;
