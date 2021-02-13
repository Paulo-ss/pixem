import React from "react";
import { useSelector } from "react-redux";
import Filters from "../Filters/Filters";
import {
  setQuery,
  filterOrientation,
  filterSize,
  changePage,
  resetOrientation,
  resetSize,
  resetPage,
  searchForVideos,
} from "../../../Store/Reducers/searchVideos.reducer";
import GetSearchQuery from "../../Helpers/GetSearchQuery";
import Videos from "../../VideosGrid/Videos";
import Pexels from "../../Helpers/Pexels";
import Pagination from "../../Helpers/Pagination";
import TotalResults from "../../Helpers/TotalResults";

const SearchVideosResults = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  // Loading e data do reducer de searchVideos
  const { loading, data } = useSelector((state) => state.searchVideos);
  // Query usada na busca
  const { query } = useSelector((state) => state.searchVideos.asyncActionArgs);

  return (
    <>
      {/* Componente helper que pega a query da URL */}
      <GetSearchQuery setQuery={setQuery} />
      <section
        className={`searchVideosResults ${
          theme ? "darkTheme darkThreeBg" : "lightTheme lightThreeBg"
        }`}
      >
        <div className="container">
          <div className="title">
            <h1> Resultados encontrados </h1>
            <p> Mostrando resultados para "{query}" </p>
          </div>
          {/* Filtros de pesquisa */}
          {data?.videos.length ? (
            <Filters
              reducer="searchVideos"
              filterOrientation={filterOrientation}
              filterSize={filterSize}
              resetOrientation={resetOrientation}
              resetSize={resetSize}
              resetPage={resetPage}
            />
          ) : null}
          {/* Total de resultados da pesquisa */}
          {!loading && data && (
            <TotalResults totalResults={data.total_results} />
          )}
          {/* Grid com os vídeos retornados pela API */}
          <Videos reducer="searchVideos" asyncAction={searchForVideos} />
          {/* Atribuindo créditos a Pexels */}
          {data?.videos.length ? <Pexels /> : null}
          {/* Paginação */}
          {data?.videos.length ? (
            <Pagination reducer="searchVideos" changePage={changePage} />
          ) : null}
        </div>
      </section>
    </>
  );
};

export default SearchVideosResults;
