import { NavLink } from "react-router-dom";
import Logo from "./Logo";

function HomeNav() {
  return (
    <nav className="flex items-center justify-between px-6 py-2 bg-amber-500/95 z-10">
      <Logo />
      <div className="inline-flex gap-2 sm:gap-8 mr-2 sm:mr-12">
        <NavLink to="/about" className="hover:text-zinc-700">
          About
        </NavLink>
        <NavLink to="/explore" className="hover:text-zinc-700">
          Explore
        </NavLink>
      </div>
    </nav>
  );
}

export default HomeNav;
