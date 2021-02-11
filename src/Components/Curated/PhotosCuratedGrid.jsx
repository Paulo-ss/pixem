import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotosCuratedGridItem from "./PhotosCuratedGridItem";
import LoadingGrid from "../Helpers/LoadingGrid";
import { getCuratedPhotos } from "../../Store/Reducers/curated.reducer";
import TotalResults from "../Helpers/TotalResults";

const PhotosGrid = () => {
  // Loading das fotos curated
  const { loading, perPage, page, data } = useSelector(
    (state) => state.curated
  );
  const dispatch = useDispatch();

  // Fazendo uma requisição no endpoint de fotos curated
  React.useEffect(() => {
    dispatch(getCuratedPhotos({ perPage, page }));
  }, [dispatch, perPage, page]);

  return (
    <>
      {/* Componente helper para mostrar a quantidade total
      de resultados encontrados */}
      {!loading && data && <TotalResults totalResults={data.total_results} />}
      <div className={`grid`}>
        {/* Componente que retorna cada foto retornada pela API */}
        {loading ? <LoadingGrid /> : <PhotosCuratedGridItem />}
      </div>
    </>
  );
};

export default PhotosGrid;
