import React from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import SearchPhotosResults from "./Photos/SearchPhotosResults";
import SearchVideosResults from "./Videos/SearchVideosResults";
import { useParams } from "react-router-dom";
import Head from "../Helpers/Head";

const SearchResults = () => {
  // Estado que define se os resultados serão
  // de fotos ou vídeos
  const { searchFor } = useSelector((state) => state.search);

  // Query da URL
  const { query } = useParams();

  return (
    <>
      <Head title={`${query}`} content={`Mostrando resultados para ${query}`} />
      <Search className="fullWindowSize" />
      {searchFor === "photos" ? (
        <SearchPhotosResults
          title="Resultados encontrados"
          filters={true}
          pagination={true}
          totalResults={true}
          subText={true}
        />
      ) : (
        <SearchVideosResults />
      )}
    </>
  );
};

export default SearchResults;
