import { NavLink } from "react-router-dom";

function Logo({ color = "dark" }) {
  return (
    <NavLink to="/">
      <div className="inline-flex items-center logo">
        <img src={`/logo-${color}.png`} className="w-14 sm:w-16"></img>
        <span
          className={`text-2xl sm:text-3xl ${
            color === "dark" ? "text-zinc-800" : "text-amber-500"
          }`}
        >
          Buddy
        </span>
      </div>
    </NavLink>
  );
}

export default Logo;
