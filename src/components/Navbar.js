import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../App.css";

const PokeNavbar = () => {
  return (
    <Navbar className="navbar" bg="dark" variant="dark">
      <Navbar.Brand>
        <img class ="masterball" src="https://i.postimg.cc/Nf4t1m11/pngegg.png" width="150px" alt="" />
      </Navbar.Brand>

      <div className="navbarTitle">
        <NavLink className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/"
        >
          Home
        </NavLink>
        {" - "}
        <NavLink class ="pokenav" className={({ isActive }) => (isActive ? "active" : undefined)}
          to="/Pokemon"
        >
          Pokémon
        </NavLink>
      </div>
    </Navbar>
  );
};
export default PokeNavbar;
