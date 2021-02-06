import { createSlice } from "@reduxjs/toolkit";

// Importando a função helper para retornar valores
// armazenados no localStorage
import getLocalStorage from "../../Helpers/getLocalStorage";

const slice = createSlice({
  name: "userInterface",
  initialState: {
    // Tema do site - 0 = Light / 1 = Dark
    theme: getLocalStorage("theme", 0),
    // Estado do menu mobile
    mobileMenu: false,
    // Estado do dropdown
    dropdownMenu: false,
  },
  reducers: {
    // Action para trocar o tema do site
    toggleTheme: {
      reducer: (state, action) => {
        state.theme = action.payload;
      },
      // Adicionando um  meta ao objeto da action para
      // poder salvar uma chave no localStorage
      prepare: (payload) => ({ payload, meta: { localStorage: "theme" } }),
    },
    // Action para abrir e fechar o menu mobile
    toggleMobileMenu(state, action) {
      state.mobileMenu = action.payload;
    },
    // Action para abrir e fechar o dropdown menu
    toggleDropdownMenu(state, action) {
      state.dropdownMenu = action.payload;
    },
  },
});

// Exportando as actions e o reducer
export const {
  toggleTheme,
  toggleMobileMenu,
  toggleDropdownMenu,
} = slice.actions;
export default slice.reducer;
