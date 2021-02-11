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
      state.orientation = action.payload;
    },
    changePerPage(state, action) {
      state.orientation = action.payload;
    },
    changePage(state, action) {
      state.orientation = action.payload;
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
} = searchPhotos.actions;
export default searchPhotos.reducer;
