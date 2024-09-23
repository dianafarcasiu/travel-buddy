import Map from "../components/Map";
import TravelInfo from "../components/TravelInfo";

function Explore() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      <TravelInfo />
      <Map />
    </div>
  );
}

export default Explore;
