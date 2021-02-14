import React from "react";
import { useDispatch } from "react-redux";
import FilterOrientation from "./FilterOrientation";
import FilterSearch from "./FilterSearch";
import FilterSize from "./FilterSize";
import PropTypes from "prop-types";

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
    <div className={`filters`}>
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
