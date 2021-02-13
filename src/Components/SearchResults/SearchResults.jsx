import React from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import SearchPhotosResults from "./Photos/SearchPhotosResults";
import SearchVideosResults from "./Videos/SearchVideosResults";

const SearchResults = () => {
  // Tema atual do site
  // const { theme } = useSelector((state) => state.userInterface);

  // Estado que define se os resultados serão
  // de fotos ou vídeos
  const { searchFor } = useSelector((state) => state.search);

  return (
    <>
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
