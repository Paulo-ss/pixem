import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotosCuratedGridItem from "./PhotosCuratedGridItem";
import LoadingGrid from "../Helpers/LoadingGrid";
import { getCuratedPhotos } from "../../Store/Reducers/curated.reducer";

const PhotosGrid = () => {
  // Loading das fotos curated
  const { loading, perPage, page } = useSelector((state) => state.curated);
  const dispatch = useDispatch();

  // Fazendo uma requisição no endpoint de fotos curated
  React.useEffect(() => {
    dispatch(getCuratedPhotos({ perPage, page }));
  }, [dispatch, perPage, page]);

  return (
    <div className={`grid`}>
      {/* Componente que retorna cada foto retornada pela API */}
      {loading ? <LoadingGrid /> : <PhotosCuratedGridItem />}
    </div>
  );
};

export default PhotosGrid;
