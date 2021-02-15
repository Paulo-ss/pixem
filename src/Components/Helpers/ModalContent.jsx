import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
// Importando os SVGs
import { ReactComponent as CloseIcon } from "../../Assets/closeX.svg";
import { toggleModal } from "../../Store/Reducers/userInterface.reducer";

const ModalContent = ({ children }) => {
  // Estado do tema do site e do modal
  const { theme, modal } = useSelector((state) => state.userInterface);

  // dispatch
  const dispatch = useDispatch();

  // Função que fecha o modal
  const closeModal = () => {
    // Fechando o modal
    dispatch(toggleModal(false));
    // Adicionando novamente o scroll da página
    document.body.style.overflowY = "auto";
  };

  // Função que fecha o modal caso o usuário
  // clique na parte de fora do modalContent
  const clickOutside = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      // Fechando o modal
      dispatch(toggleModal(false));
      // Adicionando novamente o scroll da página
      document.body.style.overflowY = "auto";
    }
  };

  if (modal) {
    return (
      <div className="modal" onClick={clickOutside}>
        {/* Botão que fecha o modal */}
        <div className="closeModal">
          <button className="btnCloseModal" onClick={closeModal}>
            <CloseIcon />
          </button>
        </div>
        {/* Conteúdo do modal que renderiza os elementos children
        recebidos pelo componente */}
        <div
          className={`modalContent animateModal ${
            theme ? "darkTheme" : "lightTheme"
          }`}
        >
          {children}
        </div>
      </div>
    );
  } else {
    return null;
  }
};

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ModalContent;
