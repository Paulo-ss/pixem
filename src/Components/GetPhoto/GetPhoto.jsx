import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Head from "../Helpers/Head";
import Search from "../Search/Search";
import SearchPhotosResults from "../SearchResults/Photos/SearchPhotosResults";
import Photo from "./Photo";

const GetPhoto = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  // Query da URL
  const { query } = useParams();

  return (
    <section
      className={`photo ${theme ? "darkTheme" : "lightTheme lightThreeBg"}`}
    >
      <Head
        title={`${query}`}
        content={`Mostrando a foto ${query} e outras fotos semelhantes a ela`}
      />
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
