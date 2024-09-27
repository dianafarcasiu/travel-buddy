import { Link } from "react-router-dom";
import { useCities } from "../contexts/CitiesContext";

function CityItem({ city }) {
  const { name, id, emoji, date, position } = city;
  const { deleteCity } = useCities();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
  }

  return (
    <Link
      to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      className="w-[85%]"
    >
      <li className="flex px-4 py-3 my-2 justify-between items-center item-style item-hover">
        <h1 className="font-bold content-center gap-2">
          <span>{emoji}</span>
          <span>{name}</span>
        </h1>
        <div className="flex gap-5 items-center">
          <p className="text-sm">({date})</p>
          <button className="delete-btn" onClick={handleClick}>
            &times;
          </button>
        </div>
      </li>
    </Link>
  );
}

export default CityItem;
