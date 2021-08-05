import "./Navigation.css";
import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <nav className="Navigation">
      <NavLink to="/courses">Courses</NavLink>
      <NavLink to="/students">Students</NavLink>
    </nav>
  );
}