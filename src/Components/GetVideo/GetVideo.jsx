import React from "react";
import { useSelector } from "react-redux";
import GetSearchQuery from "../Helpers/GetSearchQuery";
import ShapeDivider from "../Helpers/ShapeDivider";
import Search from "../Search/Search";
import Video from "./Video";
import {
  setQuery,
  searchForVideos,
} from "../../Store/Reducers/searchVideos.reducer";
import Videos from "../VideosGrid/Videos";
import Pexels from "../Helpers/Pexels";
import { useParams } from "react-router-dom";
import Head from "../Helpers/Head";

const GetVideo = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  // Query da URL
  const { query } = useParams();

  return (
    <>
      <Head
        title={`${query}`}
        content={`Mostrando o vídeo ${query} e outros vídeos semelhantes e ele`}
      />
      {/* Componente helper que pega a query da URL */}
      <GetSearchQuery setQuery={setQuery} />
      {/* Form de pesquisa */}
      <Search className="fullWindowSize" />
      <section className={`getVideo ${theme ? "darkTheme" : "lightTheme"}`}>
        <div className="container">
          <Video />
        </div>
      </section>
      <section
        className={`similarVideos ${
          theme ? "darkTwoBg lightColor" : "lightTwoBg darkColor"
        }`}
      >
        <ShapeDivider lightCSSclass="lightFill" darkCSSclass="darkFill" />
        <div className="container">
          <div className="title">
            <h1> Vídeos relacionados </h1>
          </div>
          <Videos reducer="searchVideos" asyncAction={searchForVideos} />
          <Pexels />
        </div>
      </section>
    </>
  );
};

export default GetVideo;
