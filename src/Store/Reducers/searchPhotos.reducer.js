import { SEARCH_PHOTOS } from "../../Endpoints/endpoints";
import createAsyncSlice from "../Helpers/createAsyncSlice";

const searchPhotos = createAsyncSlice({
  name: "searchPhotos",
  initialState: {
    orientation: "",
    size: "",
    perPage: 20,
    page: 1,
  },
  reducers: {
    filterOrientation(state, action) {
      state.orientation = action.payload;
    },
    filterSize(state, action) {
      state.size = action.payload;
    },
    changePerPage(state, action) {
      state.perPage = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
    resetOrientation(state) {
      state.orientation = "";
    },
    resetSize(state) {
      state.size = "";
    },
    resetPage(state) {
      state.page = 1;
    },
  },
  fetchConfig: ({ query, orientation, size, perPage, page }) =>
    SEARCH_PHOTOS(query, orientation, size, perPage, page),
});

export const { asyncAction: searchForPhotos } = searchPhotos;
export const {
  filterOrientation,
  filterSize,
  changePerPage,
  changePage,
  resetOrientation,
  resetSize,
  resetPage,
} = searchPhotos.actions;
export default searchPhotos.reducer;
