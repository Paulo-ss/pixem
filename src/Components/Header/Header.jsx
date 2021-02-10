import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// Importando o custom hook de useMedia
import useMedia from "../../Hooks/useMedia";
// Importando os logos da pixem
import logoPixemLight from "../../Assets/logoPixemLight.png";
import logoPixemDark from "../../Assets/logoPixemDark.png";
import MenuMobileBtn from "./MenuMobileBtn";
import Navbar from "./Navbar";

const Header = () => {
  const { theme } = useSelector((state) => state.userInterface);
  const matchMedia = useMedia("(max-width: 699px)");

  return (
    <>
      {/* Header principal do site */}
      <header
        className={`header ${theme ? "darkTheme" : "lightTheme"} ${
          matchMedia && "headerMobile"
        }`}
      >
        <div className="container">
          <div className="header-wrapper">
            {/* Logo da Pixem Stock */}
            <div className="logo">
              <Link to="/">
                {theme ? (
                  <img src={logoPixemDark} alt="Logo da Pixem Stock" />
                ) : (
                  <img src={logoPixemLight} alt="Logo da Pixem Stock" />
                )}
              </Link>
            </div>
            {/* O botão que abre o menu mobile só aparece em telas
              com menos de 699px */}
            {matchMedia && <MenuMobileBtn />}
            {/* Navegação principal do site */}
            <Navbar />
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
