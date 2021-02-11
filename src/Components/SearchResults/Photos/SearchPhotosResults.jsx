import React from "react";
import { useSelector } from "react-redux";
import Pagination from "../../Helpers/Pagination";
import Pexels from "../../Helpers/Pexels";
import ShapeDivider from "../../Helpers/ShapeDivider";
import SearchPhotosResultsGrid from "./SearchPhotosResultsGrid";

const SearchPhotosResults = ({ shape, title, pagination, totalResults }) => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

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
          </div>
          {/* Grid com as imagens retornadas no endpoint de SEARCH_PHOTOS */}
          <SearchPhotosResultsGrid totalResults={totalResults} />
          {/* Atribuindo os créditos para o Pexels */}
          <Pexels />
          {/* Os controles da paginação só aparecem se
          a props pagination for true */}
          {pagination && <Pagination reducer="searchPhotos" />}
        </div>
      </div>
    </div>
  );
};

export default SearchPhotosResults;
