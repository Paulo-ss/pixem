import React from "react";
import { changeSearch } from "../../../Store/Reducers/search.reducer";
// Importando os SVGs
import { ReactComponent as ImagesIcon } from "../../../Assets/images.svg";
import { ReactComponent as VideosIcon } from "../../../Assets/videos.svg";
import { useDispatch, useSelector } from "react-redux";

const FilterSearch = () => {
  // Estado do searchFor
  const { searchFor } = useSelector((state) => state.search);
  // Dispatch
  const dispatch = useDispatch();

  // Quando um radio é selecionado, o estado troca
  // e um dispatch é feito com o valor do radio
  const changeSearchFor = ({ target }) => {
    // Trocando o estado do reducer o que faz com
    // que os resultados da busca troquem
    dispatch(changeSearch(target.value));
  };

  return (
    <div className={`filter`}>
      <div className="filterTitle">
        <h3> Pesquisar por </h3>
      </div>
      <div className="filterRadios">
        <label className="radioLabel">
          <input
            type="radio"
            id="searchForPhotos"
            name="searchFor"
            value="photos"
            checked={searchFor === "photos"}
            onChange={changeSearchFor}
          />
          <div className="radioDisplay">
            <ImagesIcon />
            Imagens
          </div>
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            id="searchForVideos"
            name="searchFor"
            value="videos"
            checked={searchFor === "videos"}
            onChange={changeSearchFor}
          />
          <div className="radioDisplay">
            <VideosIcon />
            Vídeos
          </div>
        </label>
      </div>
    </div>
  );
};

export default FilterSearch;
