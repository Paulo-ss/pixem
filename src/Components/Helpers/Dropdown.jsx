import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Importando a action para abrir e fechar o dropdown menu
import { toggleDropdownMenu } from "../../Store/Reducers/userInterface.reducer";
// Importando a função helper que lida com
// o clique fora do elemento
import handleOutsideClick from "../../Helpers/handleOutsideClick";
// Importando o custom hook useMedia
import useMedia from "../../Hooks/useMedia";
// Importando o ícone de configurações
import { ReactComponent as ConfigDark } from "../../Assets/configDark.svg";
import { ReactComponent as ConfigLight } from "../../Assets/configLight.svg";
import DropdownMenu from "./DropdownMenu";

const Dropdown = () => {
  // Estados atuais do tema do site e do dropdown
  const { theme, dropdownMenu } = useSelector((state) => state.userInterface);
  const dispatch = useDispatch();

  // Verifica o tamanho atual da tela
  const matchMedia = useMedia("(max-width: 699px)");

  // Função que faz o toggle no dropdown
  const toggleDropdown = ({ currentTarget }) => {
    dispatch(toggleDropdownMenu(!dropdownMenu));
    currentTarget.classList.toggle("active");

    // Chamando a função para verificar se o clique
    // foi fora do dropdown menu e fechá-lo
    handleOutsideClick(currentTarget.parentElement, () => {
      dispatch(toggleDropdownMenu(false));
      currentTarget.classList.remove("active");
    });
  };

  return (
    <>
      <button
        className={`dropdownToggle ${matchMedia && "dropdownMobile"}`}
        onClick={toggleDropdown}
      >
        {theme ? <ConfigLight /> : <ConfigDark />}
      </button>
      {dropdownMenu && <DropdownMenu />}
    </>
  );
};

export default Dropdown;
