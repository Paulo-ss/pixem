import { GET_PHOTO } from "../../Endpoints/endpoints";
import createAsyncSlice from "../Helpers/createAsyncSlice";

const photo = createAsyncSlice({
  name: "photo",
  fetchConfig: (photoId) => GET_PHOTO(photoId),
});

export const { asyncAction: getPhoto } = photo;
export default photo.reducer;
