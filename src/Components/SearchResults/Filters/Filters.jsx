import React from "react";
import { useDispatch } from "react-redux";
import FilterOrientation from "./FilterOrientation";
import FilterSearch from "./FilterSearch";
import FilterSize from "./FilterSize";
import PropTypes from "prop-types";
import OpenModal from "../../Helpers/OpenModal";
// Importando os SVGs
import { ReactComponent as FiltersIcon } from "../../../Assets/filters.svg";
import ModalContent from "../../Helpers/ModalContent";

const Filters = ({
  reducer,
  filterOrientation,
  filterSize,
  resetOrientation,
  resetSize,
  resetPage,
}) => {
  // dispatch
  const dispatch = useDispatch();

  // Resetando os filtros selecionados na hora
  // do clean up do componente
  React.useEffect(() => {
    return () => {
      dispatch(resetOrientation());
      dispatch(resetSize());
      dispatch(resetPage());
    };
  }, [dispatch, resetOrientation, resetSize, resetPage]);

  return (
    <div>
      {/* Botão que abre e fecha o modal */}
      <OpenModal>
        <button type="button" className="filtrosBtn">
          <FiltersIcon />
          <p> Filtrar </p>
        </button>
      </OpenModal>
      {/* Conteúdo do modal */}
      <ModalContent>
        {/* Filtros de pesquisa */}
        <div className="filters">
          <FilterSearch />
          <FilterOrientation
            reducer={reducer}
            filterOrientation={filterOrientation}
            resetOrientation={resetOrientation}
            resetPage={resetPage}
          />
          <FilterSize
            reducer={reducer}
            filterSize={filterSize}
            resetSize={resetSize}
            resetPage={resetPage}
          />
        </div>
      </ModalContent>
    </div>
  );
};

Filters.propTypes = {
  reducer: PropTypes.string.isRequired,
  filterOrientation: PropTypes.func.isRequired,
  filterSize: PropTypes.func.isRequired,
  resetOrientation: PropTypes.func.isRequired,
  resetSize: PropTypes.func.isRequired,
  resetPage: PropTypes.func.isRequired,
};

export default Filters;
