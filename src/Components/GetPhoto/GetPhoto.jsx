import React from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import SearchPhotosResults from "../SearchResults/Photos/SearchPhotosResults";
import Photo from "./Photo";

const GetPhoto = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  return (
    <section
      className={`photo ${theme ? "darkTheme" : "lightTheme lightThreeBg"}`}
    >
      <Search className="fullWindowSize" />
      <div className="container">
        <div className="photoWrapper">
          <Photo />
        </div>
      </div>
      {/* Grid com as imagens retornadas no endpoint de
      SEARCH_PHOTOS. Nesse caso, a query de busca vem da
      descrição retirada da url da imagem selecionada para
      pesquisar por imagens similares */}
      <SearchPhotosResults shape={true} title="Imagens relacionadas" />
    </section>
  );
};

export default GetPhoto;
