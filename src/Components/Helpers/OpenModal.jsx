import React from "react";
import { useDispatch } from "react-redux";
import { toggleModal } from "../../Store/Reducers/userInterface.reducer";
import PropTypes from "prop-types";

const OpenModal = ({ children }) => {
  // dispatch
  const dispatch = useDispatch();

  // Função que abre o modal
  const openModal = ({ currentTarget }) => {
    // Abrindo o modal
    dispatch(toggleModal(true));
    // Removendo o foco do button
    currentTarget.children[0].blur();
    // Removendo o scroll da página
    document.body.style.overflowY = "hidden";
  };

  return (
    <div id="openModal" onClick={openModal}>
      {children}
    </div>
  );
};

OpenModal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OpenModal;
