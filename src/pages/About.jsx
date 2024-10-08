import HomeNav from "../components/HomeNav";

function About() {
  return (
    <>
      <HomeNav />
      <div className="flex h-[94vh] justify-center items-center p-6 lg:p-0 bg-zinc-300 text-zinc-800">
        <div className="w-full sm:w-1/3 flex justify-center hidden sm:block pb-6">
          <img
            src="./travel-pic.jpg"
            alt="travel picture"
            className="w-72 md:w-96 mb-2 rounded-2xl shadow-md shadow-black/50"
          ></img>
        </div>
        <div className="w-full sm:w-2/3 flex justify-center text-center sm:text-start max-w-xl sm:pl-6 pb-6">
          <div>
            <p className="font-bold sm:text-lg md:text-xl">
              TravelBuddy helps you track every adventure, log every detail, and
              relive every moment. <br></br>
              <br></br> Start your journey today and never forget a place you've
              been.
            </p>
            <ul className="mt-10 list-disc list-inside text-sm sm:text-base leading-6">
              <li className="mt-4">
                Easily log your trips with dates, locations, and notes.
              </li>
              <li className="mt-4">
                Organize your travel notes and memories in one convenient place.
              </li>
              <li className="mt-4">
                View a map of all the places you've been and discover where you
                want to go next.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
