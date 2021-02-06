import React from "react";
import { useSelector } from "react-redux";
// Importando o custom hook useMedia
import useMedia from "../../Hooks/useMedia";
// Importando os svgs dos ícones de modo dark
import { ReactComponent as DarkMode } from "../../Assets/darkMode.svg";
import { ReactComponent as DarkModeLight } from "../../Assets/darkModeLight.svg";
import ToggleSwitch from "../Inputs/ToggleSwitch";
import DropdownMenuItem from "./DropdownMenuItem";

const DropdownMenu = () => {
  const { theme } = useSelector((state) => state.userInterface);

  // Verifica o tamamho atual da tela
  const matchMedia = useMedia("(max-width: 699px)");

  return (
    <ul
      className={`dropdownMenu ${theme ? "darkTwoBg" : "lightTwoBg"} ${
        matchMedia && "dropdownMenuMobile"
      }`}
    >
      <li>
        <DropdownMenuItem>
          <div className="themeLiItem">
            <div>{theme ? <DarkModeLight /> : <DarkMode />} Modo escuro </div>
            {/* Input checkbox em formato de switch */}
            <ToggleSwitch />
          </div>
        </DropdownMenuItem>
      </li>
    </ul>
  );
};

export default DropdownMenu;
