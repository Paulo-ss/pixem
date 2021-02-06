import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "userInterface",
  initialState: {
    // Tema do site - 0 = Light / 1 = Dark
    theme: 0,
  },
  reducers: {
    // Action para trocar o tema do site
    toggleTheme: {
      reducer: (state, action) => (state.theme = action.payload),
      // Adicionando um  meta ao objeto da action para
      // poder salvar uma chave no localStorage
      prepare: (payload) => ({ payload, meta: { localStorage: "theme" } }),
    },
  },
});

// Exportando as actions e o reducer
export const { toggleTheme } = slice.actions;
export default slice.reducer;
