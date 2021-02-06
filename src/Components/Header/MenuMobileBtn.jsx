import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Importando a action para abrir e fechar o menu
import { toggleMobileMenu } from "../../Store/Reducers/userInterface.reducer";

const MenuMobileBtn = () => {
  const { mobileMenu, theme } = useSelector((state) => state.userInterface);
  const dispatch = useDispatch();

  const toggleMenu = ({ currentTarget }) => {
    dispatch(toggleMobileMenu(!mobileMenu));

    if (!mobileMenu) {
      currentTarget.classList.add("active");
    } else {
      currentTarget.classList.remove("active");
    }
  };

  return (
    <div className="menuMobileBtn" onClick={toggleMenu}>
      <span className={`${theme ? "lightBg" : "darkBg"}`}></span>
      <span className={`${theme ? "lightBg" : "darkBg"}`}></span>
      <span className={`${theme ? "lightBg" : "darkBg"}`}></span>
    </div>
  );
};

export default MenuMobileBtn;
