import { NavLink, Outlet } from "react-router-dom";
import "../styles/navBar.css";

export default function Root() {
  return (
    <>
      <nav className="nav">
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-navlink link" : "link"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "active-navlink link" : "link"
          }
          to="/about"
        >
          About
        </NavLink>
      </nav>
      <Outlet></Outlet>
    </>
  );
}
