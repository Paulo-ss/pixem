import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../Helpers/Pagination";
import Pexels from "../../Helpers/Pexels";
import ShapeDivider from "../../Helpers/ShapeDivider";
import SearchPhotosResultsGrid from "./SearchPhotosResultsGrid";
import { changePage } from "../../../Store/Reducers/searchPhotos.reducer";
import { useParams } from "react-router-dom";
import Filters from "../Filters/Filters";
import {
  filterOrientation,
  filterSize,
  resetOrientation,
  resetSize,
  resetPage,
} from "../../../Store/Reducers/searchPhotos.reducer";

const SearchPhotosResults = ({
  shape,
  title,
  filters,
  pagination,
  totalResults,
  subText,
}) => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  const { data } = useSelector((state) => state.searchPhotos);

  // Acessando a query da URL
  const { query } = useParams();
  const cleandQuery = query.replace(/\W/g, " ");

  return (
    <div
      className={`photosSearchResults ${
        theme ? "darkTheme darkThreeBg" : "lightTheme lightTwoBg"
      }  ${shape ? "shapeDividerGutter" : ""}`}
    >
      {/* Shape divider só aparece se a prop shape for true */}
      {shape && (
        <ShapeDivider lightCSSclass="lightThreeFill" darkCSSclass="darkFill" />
      )}
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <h1> {title} </h1>
            {subText && <p>Mostrando resultados para "{cleandQuery}"</p>}
          </div>
          {/* Filtros para refinar a pesquisa */}
          {filters && data?.photos.length ? (
            <Filters
              reducer="searchPhotos"
              filterOrientation={filterOrientation}
              filterSize={filterSize}
              resetOrientation={resetOrientation}
              resetSize={resetSize}
              resetPage={resetPage}
            />
          ) : null}
          {/* Grid com as imagens retornadas no endpoint de SEARCH_PHOTOS */}
          <SearchPhotosResultsGrid totalResults={totalResults} />
          {/* Atribuindo os créditos para o Pexels */}
          {data?.photos.length ? <Pexels /> : ""}
          {/* Os controles da paginação só aparecem se
          a props pagination for true */}
          {pagination && (
            <Pagination reducer="searchPhotos" changePage={changePage} />
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchPhotosResults;
