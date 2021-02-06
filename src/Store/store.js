import {
  getDefaultMiddleware,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";

// Importando os reducers
import userInterface from "./Reducers/userInterface.reducer";

// Importando os middlewares

// Configurando os middlewares
const middleware = [...getDefaultMiddleware()];
// Configurando os reducers
const reducer = combineReducers({ userInterface });
// Configurando a store
const store = configureStore({ reducer, middleware });

export default store;
