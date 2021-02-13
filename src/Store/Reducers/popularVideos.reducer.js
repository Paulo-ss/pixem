import { POPULAR_VIDEOS } from "../../Endpoints/endpoints";
import createAsyncSlice from "../Helpers/createAsyncSlice";

const popularVideos = createAsyncSlice({
  name: "popularVideos",
  initialState: {
    asyncActionArgs: {
      perPage: 20,
      page: 1,
    },
  },
  reducers: {
    changePerPage(state, action) {
      state.asyncActionArgs.perPage = action.payload;
    },
    changePage(state, action) {
      state.asyncActionArgs.page = action.payload;
    },
  },
  fetchConfig: ({ perPage, page }) => POPULAR_VIDEOS(perPage, page),
});

export const { asyncAction: getPopularVideos } = popularVideos;
export const { changePerPage, changePage } = popularVideos.actions;
export default popularVideos.reducer;
