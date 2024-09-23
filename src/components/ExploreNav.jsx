import { NavLink } from "react-router-dom";

function ExploreNav() {
  return (
    <nav className="my-10">
      <ul className="inline-flex justify-center">
        <li>
          <NavLink
            to="cities"
            className={({ isActive }) =>
              `explore-nav rounded-l-lg ${isActive ? "bg-zinc-800" : ""}`
            }
          >
            Cities
          </NavLink>
        </li>
        <li>
          <NavLink
            to="countries"
            className={({ isActive }) =>
              `explore-nav rounded-r-lg ${isActive ? "bg-zinc-800" : ""}`
            }
          >
            Countries
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default ExploreNav;
