import { Outlet } from "react-router-dom";
import ExploreNav from "./ExploreNav";
import Logo from "./Logo";

function TravelInfo() {
  return (
    <div className="w-full md:w-[40%] h-[40%] md:h-screen overflow-y-scroll py-6 bg-zinc-700 text-zinc-200 text-center">
      <Logo color="light" />
      <ExploreNav />

      <Outlet />
    </div>
  );
}

export default TravelInfo;
