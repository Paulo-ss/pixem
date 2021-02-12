import React from "react";
import { useSelector } from "react-redux";
import Search from "../Search/Search";
import Videos from "../VideosGrid/Videos";
import Pexels from "../Helpers/Pexels";
import { changePage } from "../../Store/Reducers/popularVideos.reducer";
import Pagination from "../Helpers/Pagination";
import { getPopularVideos } from "../../Store/Reducers/popularVideos.reducer";
import TotalResults from "../Helpers/TotalResults";

const PopularVideos = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  // Loading e data do reducer popularVideos
  const { loading, data } = useSelector((state) => state.popularVideos);

  return (
    <>
      <Search className="fullWindowSize" />
      <section
        className={`popularVideos ${
          theme ? "darkTheme darkTwoBg" : "lightTheme lightTwoBg"
        }`}
      >
        <div className="container">
          <div className="title">
            <h1> Vídeos populares </h1>
            <p>
              Vídeos trending no momento selecionados para você não perder nada
            </p>
          </div>
          {!loading && data && (
            <TotalResults totalResults={data.total_results} />
          )}
          <Videos reducer="popularVideos" asyncAction={getPopularVideos} />
          <Pexels />
          <Pagination reducer="popularVideos" changePage={changePage} />
        </div>
      </section>
    </>
  );
};

export default PopularVideos;
