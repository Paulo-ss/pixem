import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingGrid from "../../Helpers/LoadingGrid";
import SearchPhotosResultsGridItem from "./SearchPhotosResultsGridItem";
import { searchForPhotos } from "../../../Store/Reducers/searchPhotos.reducer";
import TotalResults from "../../Helpers/TotalResults";
import { useParams } from "react-router-dom";
import Error from "../../Helpers/Error";
import PropTypes from "prop-types";

const SearchPhotosResultsGrid = ({ totalResults }) => {
  // Estado do resultados da pesquisa de fotos
  const { loading, data, error, asyncActionArgs } = useSelector(
    (state) => state.searchPhotos
  );

  // Dispatch
  const dispatch = useDispatch();

  // Função que limpa a query de busca
  const clearQuery = (query) => {
    return query.replace(/\W/g, " ");
  };

  // Pegando a query de busca da url
  const { query: paramQuery } = useParams();

  // Fazendo a requisição no endpoint de search photos
  React.useEffect(() => {
    // Sempre que a query for atualizada, uma nova
    // requisição no endpoint de search photos é realizado
    const query = clearQuery(paramQuery);

    dispatch(searchForPhotos({ query, ...asyncActionArgs }));
  }, [dispatch, asyncActionArgs, paramQuery]);

  if (error) return <Error error={error} />;
  return (
    <>
      {/* Componente helper para mostrar a quantidade total
      de resultados encontrados */}
      {!loading && data && totalResults && (
        <TotalResults totalResults={data.total_results} />
      )}
      <div className="grid">
        {/* Componente que retorna cada foto retornada pela API */}
        {loading ? <LoadingGrid /> : <SearchPhotosResultsGridItem />}
      </div>
    </>
  );
};

SearchPhotosResultsGrid.propTypes = {
  totalResults: PropTypes.bool,
};

export default SearchPhotosResultsGrid;
