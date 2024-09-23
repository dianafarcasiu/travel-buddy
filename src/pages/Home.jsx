import { NavLink } from "react-router-dom";
import HomeNav from "../components/HomeNav";

function Home() {
  return (
    <>
      <HomeNav />
      <div className="relative flex items-center justify-center min-h-[94vh] bg-[url('/bg-img-ny.jpg')] bg-cover bg-no-repeat bg-center pb-6">
        {/* Black Transparent Overlay */}
        <div className="absolute inset-0 bg-black/55"></div>

        {/* Text Content */}
        <div className="relative z-10 text-zinc-200 text-center px-4">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Welcome to TravelBuddy!
          </h1>
          <p className="mt-6 font-bold text-xl sm:text-2xl">
            Travel Far, Remember More.
          </p>
          <p className="mt-6 text-md sm:text-lg">
            Ready to start your next adventure? Let TravelBuddy keep track of
            every step along the way.
          </p>
          <NavLink to="/explore">
            <button className="btn mt-10 bg-amber-500 hover:bg-amber-600 ">
              Start exploring
            </button>
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Home;
