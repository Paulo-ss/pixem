import { SEARCH_VIDEOS } from "../../Endpoints/endpoints";
import createAsyncSlice from "../Helpers/createAsyncSlice";

const searchVideos = createAsyncSlice({
  name: "searchVideos",
  initialState: {
    asyncActionArgs: {
      query: "",
      orientation: "",
      size: "",
      perPage: 20,
      page: 1,
    },
  },
  reducers: {
    setQuery(state, action) {
      state.asyncActionArgs.query = action.payload;
    },
    filterOrientation(state, action) {
      state.asyncActionArgs.orientation = action.payload;
    },
    filterSize(state, action) {
      state.asyncActionArgs.size = action.payload;
    },
    changePerPage(state, action) {
      state.asyncActionArgs.perPage = action.payload;
    },
    changePage(state, action) {
      state.asyncActionArgs.page = action.payload;
    },
    resetOrientation(state) {
      state.asyncActionArgs.orientation = "";
    },
    resetSize(state) {
      state.asyncActionArgs.size = "";
    },
    resetPage(state) {
      state.asyncActionArgs.page = 1;
    },
  },
  fetchConfig: ({ query, orientation, size, perPage, page }) =>
    SEARCH_VIDEOS(query, orientation, size, perPage, page),
});

export const { asyncAction: searchForVideos } = searchVideos;
export const {
  setQuery,
  filterOrientation,
  filterSize,
  changePerPage,
  changePage,
  resetOrientation,
  resetSize,
  resetPage,
} = searchVideos.actions;
export default searchVideos.reducer;
