import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Importando os SVGs
import { ReactComponent as LargeFileIcon } from "../../../Assets/largeFile.svg";
import { ReactComponent as MediumFileIcon } from "../../../Assets/mediumFile.svg";
import { ReactComponent as SmallFileIcon } from "../../../Assets/smallFile.svg";
import { ReactComponent as CloseIcon } from "../../../Assets/closeX.svg";

const FilterSize = ({ reducer, filterSize, resetSize }) => {
  // Estado do filtro de size
  const { size } = useSelector((state) => state[reducer]);
  // Dispatch
  const dispatch = useDispatch();

  // Quando um radio é selecionado, o estado troca
  // e um dispatch é feito com o valor do radio
  const changeFilter = ({ target }) => {
    // Trocando o estado do reducer o que faz com
    // que os resultados da busca troquem
    dispatch(filterSize(target.value));
  };

  // Função que limpa o filtro
  const cleanFilter = () => {
    dispatch(resetSize());
  };

  return (
    <div className={`filter`}>
      <div className="filterTitle">
        <h3> Tamanho do arquivo </h3>
        {size.length !== 0 && (
          <button className="cleanFilter" onClick={cleanFilter}>
            <CloseIcon />
          </button>
        )}
      </div>
      <div className="filterRadios">
        <label className="radioLabel">
          <input
            type="radio"
            id="searchForPhotos"
            name="filterOrientation"
            value="large"
            checked={size === "large"}
            onChange={changeFilter}
          />
          <div className="radioDisplay">
            <LargeFileIcon />
            Grande
          </div>
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            id="searchForVideos"
            name="filterOrientation"
            value="medium"
            checked={size === "medium"}
            onChange={changeFilter}
          />
          <div className="radioDisplay">
            <MediumFileIcon />
            Médio
          </div>
        </label>
        <label className="radioLabel">
          <input
            type="radio"
            id="searchForVideos"
            name="filterOrientation"
            value="small"
            checked={size === "small"}
            onChange={changeFilter}
          />
          <div className="radioDisplay">
            <SmallFileIcon />
            Pequeno
          </div>
        </label>
      </div>
    </div>
  );
};

export default FilterSize;
