import React from "react";
import { useDispatch } from "react-redux";
import FilterOrientation from "./FilterOrientation";
import FilterSearch from "./FilterSearch";
import FilterSize from "./FilterSize";

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

export default Filters;
