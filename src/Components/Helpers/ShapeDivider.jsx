import React from "react";
import { useSelector } from "react-redux";
// Importando o custom hook useMedia para
// verificar o tamamho da tela
import useMedia from "../../Hooks/useMedia";

const ShapeDivider = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  // Valor true ou false caso a tela seja menor que 699px
  const matchMedia = useMedia("(max-width: 699px)");

  return (
    <>
      {!matchMedia && (
        <div className="custom-shape-divider-top-1612734982">
          {/* SVG do shape divider */}
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className={`${theme ? "darkTwoFill" : "lightTwoFill"}`}
            ></path>
          </svg>
        </div>
      )}
    </>
  );
};

export default ShapeDivider;
