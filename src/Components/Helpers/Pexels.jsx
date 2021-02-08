import React from "react";
import { useSelector } from "react-redux";

// Componente com o texto dando créditos a Pexels
const Pexels = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  return (
    <div className={`pexels`}>
      <div className={`logoPexels ${theme ? "darkTwoBg" : "lightTwoBg"}`}>
        {theme ? (
          <img
            src="https://images.pexels.com/lib/api/pexels-white.png"
            alt="Logo da Pexels"
          />
        ) : (
          <img
            src="https://images.pexels.com/lib/api/pexels.png"
            alt="Logo da Pexels"
          />
        )}
      </div>
      <a
        href="https://www.pexels.com"
        target="_blank"
        rel="noreferrer"
        title="Pexels"
        className={`${theme ? "lightColor" : "darkColor"}`}
      >
        Fotos e vídeos fornecidos pela Pexels
      </a>
    </div>
  );
};

export default Pexels;
