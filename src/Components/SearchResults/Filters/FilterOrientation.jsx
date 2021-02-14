import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Importando os SVGs
import { ReactComponent as HorizontalIcon } from "../../../Assets/horizontal.svg";
import { ReactComponent as VerticalIcon } from "../../../Assets/vertical.svg";
import { ReactComponent as SquarelIcon } from "../../../Assets/square.svg";
import { ReactComponent as CloseIcon } from "../../../Assets/closeX.svg";
import PropTypes from "prop-types";

const FilterOrientation = ({
  reducer,
  filterOrientation,
  resetOrientation,
  resetPage,
}) => {
  // Estado do filtro de orientação
  const { orientation } = useSelector(
    (state) => state[reducer].asyncActionArgs
  );
  // Dispatch
  const dispatch = useDispatch();

  // Quando um radio é selecionado, o estado troca
  // e um dispatch é feito com o valor do radio
  const changeFilter = ({ target }) => {
    // Sempre que um filtro é aplicado,
    // a pagina reseta para a primeria
    dispatch(resetPage());
    // Trocando o estado do reducer o que faz com
    // que os resultados da busca troquem
    dispatch(filterOrientation(target.value));
  };

  // Função que limpa o filtro
  const cleanFilter = () => {
    // Sempre que os filtros são removidos,
    // a página reseta para a primeira
    dispatch(resetPage());
    dispatch(resetOrientation());
  };

  return (
    <div className={`filter`}>
      <div className="filterTitle">
        <h3> Orientação </h3>
        {orientation.length !== 0 && (
          <button className="cleanFilter" onClick={cleanFilter}>
            <CloseIcon />
          </button>
        )}
      </div>
      <div className="filterRadios">
        <label className="radioLabel">
          <input
            type="radio"
            id="searchForPhotos"
            name="filterOrientation"
            value="landscape"
            checked={orientation === "landscape"}
            onChange={changeFilter}
          />
          <div className="radioDisplay">
            <HorizontalIcon />
            Horizontal
          </div>
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            id="searchForVideos"
            name="filterOrientation"
            value="portrait"
            checked={orientation === "portrait"}
            onChange={changeFilter}
          />
          <div className="radioDisplay">
            <VerticalIcon />
            Vertical
          </div>
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            id="searchForVideos"
            name="filterOrientation"
            value="square"
            checked={orientation === "square"}
            onChange={changeFilter}
          />
          <div className="radioDisplay">
            <SquarelIcon />
            Quadrado
          </div>
        </label>
      </div>
    </div>
  );
};

FilterOrientation.propTypes = {
  reducer: PropTypes.string.isRequired,
  filterOrientation: PropTypes.func.isRequired,
  resetOrientation: PropTypes.func.isRequired,
  resetPage: PropTypes.func.isRequired,
};

export default FilterOrientation;
