import React from "react";
import PhotoContent from "./PhotoContent";
import Loading from "../Helpers/Loading";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPhoto } from "../../Store/Reducers/photo.reducer";

const Photo = () => {
  // Estado de loading
  const { loading } = useSelector((state) => state.photo);
  // id da foto
  const { photoId } = useParams();
  // Dispatch
  const dispatch = useDispatch();

  // Fetch no endpoint de GET_PHOTO para
  // trazer os dados da foto específica
  React.useEffect(() => {
    dispatch(getPhoto(photoId));
  }, [dispatch, photoId]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <section className={`photoContent`}>
          <PhotoContent />
        </section>
      )}
    </>
  );
};

export default Photo;
