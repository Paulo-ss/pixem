import { SEARCH_PHOTOS } from "../../Endpoints/endpoints";
import createAsyncSlice from "../Helpers/createAsyncSlice";

const searchPhotos = createAsyncSlice({
  name: "searchPhotos",
  initialState: {
    asyncActionArgs: {
      orientation: "",
      size: "",
      perPage: 20,
      page: 1,
    },
  },
  reducers: {
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
