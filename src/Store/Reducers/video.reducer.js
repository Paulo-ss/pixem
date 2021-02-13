import { GET_VIDEO } from "../../Endpoints/endpoints";
import createAsyncSlice from "../Helpers/createAsyncSlice";

const video = createAsyncSlice({
  name: "video",
  fetchConfig: (videoId) => GET_VIDEO(videoId),
});

export const { asyncAction: getVideo } = video;
export default video.reducer;
