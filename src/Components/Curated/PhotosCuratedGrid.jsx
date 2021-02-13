import React from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotosCuratedGridItem from "./PhotosCuratedGridItem";
import LoadingGrid from "../Helpers/LoadingGrid";
import { getCuratedPhotos } from "../../Store/Reducers/curated.reducer";
import TotalResults from "../Helpers/TotalResults";
import Error from "../Helpers/Error";

const PhotosGrid = () => {
  // Loading das fotos curated
  const { loading, data, error, asyncActionArgs } = useSelector(
    (state) => state.curated
  );
  const dispatch = useDispatch();

  // Fazendo uma requisição no endpoint de fotos curated
  React.useEffect(() => {
    dispatch(getCuratedPhotos({ ...asyncActionArgs }));
  }, [dispatch, asyncActionArgs]);

  if (error) return <Error error={error} />;
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
