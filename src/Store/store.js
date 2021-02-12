import {
  getDefaultMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

// Importando os reducers
import userInterface from "./Reducers/userInterface.reducer";
import search from "./Reducers/search.reducer";
import curated from "./Reducers/curated.reducer";
import photo from "./Reducers/photo.reducer";
import searchPhotos from "./Reducers/searchPhotos.reducer";
import popularVideos from "./Reducers/popularVideos.reducer";

// Importando os middlewares
import localStorage from "./Middlewares/localStorage";

// Configurando os middlewares
const middleware = [...getDefaultMiddleware(), localStorage];
// Configurando os reducers
const reducer = combineReducers({
  userInterface,
  search,
  curated,
  photo,
  searchPhotos,
  popularVideos,
});
// Configurando a store
const store = configureStore({ reducer, middleware });

export default store;
