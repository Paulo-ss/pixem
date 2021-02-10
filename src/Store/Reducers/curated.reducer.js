import { GET_CURATED_PHOTOS } from "../../Endpoints/endpoints";
import createAsyncSlice from "../Helpers/createAsyncSlice";

const curated = createAsyncSlice({
  name: "curated",
  initialState: {
    perPage: 15,
    page: 1,
  },
  reducers: {
    changePerPage(state, action) {
      state.perPage = action.payload;
    },
    changePage(state, action) {
      state.page = action.payload;
    },
  },
  fetchConfig: ({ perPage, page }) => GET_CURATED_PHOTOS(perPage, page),
});

export const { asyncAction: getCuratedPhotos } = curated;
export const { changePage, changePerPage } = curated.actions;
export default curated.reducer;
