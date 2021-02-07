import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
        <Router>
          <li>
            <Link
              to=""
              className={`${theme ? "darkTwoHoverBg" : "lightTwoHoverBg"}`}
            >
              {" "}
              Fotos curated{" "}
            </Link>
          </li>
          <li>
            <Link
              to=""
              className={`${theme ? "darkTwoHoverBg" : "lightTwoHoverBg"}`}
            >
              {" "}
              Vídeos populares{" "}
            </Link>
          </li>
          {/* Dropdown menu */}
          <li>
            <Dropdown />
          </li>
        </Router>
      </ul>
    </nav>
  );
};

export default Navbar;
