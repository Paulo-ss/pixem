import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Dropdown from "../Helpers/Dropdown";
// Importando o custom hook de useMedia
import useMedia from "../../Hooks/useMedia";

const Navbar = () => {
  const { theme, mobileMenu } = useSelector((state) => state.userInterface);
  const matchMedia = useMedia("(max-width: 699px)");

  return (
    <nav
      className={`navbar ${matchMedia && "navbarNavMobile"} ${
        mobileMenu && "active"
      }`}
    >
      <ul className={`navbarNav ${theme ? "darkTheme" : "lightTheme"}`}>
        <li>
          <NavLink
            to="/curated"
            className={`${theme ? "darkTwoHoverBg" : "lightTwoHoverBg"}`}
            activeStyle={{ background: `${theme ? "#272727" : "#fafafa"}` }}
          >
            {" "}
            Fotos curated{" "}
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/videos-populares"
            className={`${theme ? "darkTwoHoverBg" : "lightTwoHoverBg"}`}
            activeStyle={{ background: `${theme ? "#272727" : "#fafafa"}` }}
          >
            {" "}
            Vídeos populares{" "}
          </NavLink>
        </li>
        {/* Dropdown menu */}
        <li>
          <Dropdown />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
