import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Importando a action para mudar o tema do site
import { toggleTheme } from "../../Store/Reducers/userInterface.reducer";

const ToggleSwitch = () => {
  // Acessando o estado do tema atual do site
  const { theme } = useSelector((state) => state.userInterface);
  const dispatch = useDispatch();

  // Função que troca o tema do site
  const changeTheme = ({ target }) => {
    if (target.checked) {
      dispatch(toggleTheme(1));
    } else {
      dispatch(toggleTheme(0));
    }
  };

  // Função que verifica o tema selecionado e
  // deixa o input marcado ou não
  const handleChecked = () => {
    if (theme) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <label className={`switch`}>
      <input type="checkbox" onChange={changeTheme} checked={handleChecked()} />
      <span></span>
    </label>
  );
};

export default ToggleSwitch;
