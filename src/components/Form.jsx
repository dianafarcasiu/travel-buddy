import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUrlPosition } from "../hooks/useUrlPosition";
import { useCities } from "../contexts/CitiesContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import BackButton from "./BackButton";
import Spinner from "./Spinner";
import Message from "./Message";

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client";

function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

function Form() {
  const { createCity } = useCities();
  const [lat, lng] = useUrlPosition();
  const navigate = useNavigate();
  const [isLoadingGeocoding, setIsLoadingGeocoding] = useState(false);
  const [geocodingError, setGeocodingError] = useState("");

  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [emoji, setEmoji] = useState("");

  useEffect(
    function () {
      async function fetchCityData() {
        if (!lat && !lng) return;
        try {
          setIsLoadingGeocoding(true);
          setGeocodingError("");
          const res = await fetch(
            `${BASE_URL}?latitude=${lat}&longitude=${lng}`
          );
          const data = await res.json();
          if (!data.countryCode)
            throw new Error(
              "That doesn't seem to be a city, click somewhere else."
            );

          setName(data.city || data.locality || "");
          setCountry(data.countryName);
          setEmoji(convertToEmoji(data.countryCode));
        } catch (err) {
          setGeocodingError(err.message);
        } finally {
          setIsLoadingGeocoding(false);
        }
      }
      fetchCityData();
    },
    [lat, lng]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !date) return;
    const newCity = {
      name,
      country,
      date: date.toLocaleDateString("en-GB"),
      notes,
      emoji,
      position: { lat, lng },
      id: Date.now(),
    };
    createCity(newCity);
    navigate("/explore/cities");
  }

  if (isLoadingGeocoding) return <Spinner />;
  if (!lat && !lng)
    return <Message> Start by clicking somewhere on the map.</Message>;
  if (geocodingError) return <Message>{geocodingError}</Message>;

  return (
    <form className="text-box" onSubmit={handleSubmit}>
      <div className="form-row">
        <label htmlFor="name" className="label">
          City name
        </label>
        <div className="relative flex items-center ">
          <span className="absolute left-3 ">{emoji}</span>
          <input
            id="name"
            className="form-input pl-9 w-full "
            onChange={(e) => setName(e.target.value)}
            value={name}
            disabled
          />
        </div>
      </div>

      <div className="form-row">
        <label className="label" htmlFor="date">
          When did you go?
        </label>
        <DatePicker
          id="date"
          className="form-input w-full"
          onChange={(date) => setDate(date)}
          selected={date}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className="form-row">
        <label className="label" htmlFor="notes">
          Your notes
        </label>
        <textarea
          id="notes"
          className="form-input"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className="flex items-center justify-between">
        <button className="btn border border-transparent bg-green-500 hover:bg-green-500/90">
          {" "}
          Add
        </button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
