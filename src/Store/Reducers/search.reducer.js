import { createSlice } from "@reduxjs/toolkit";

// Reducer com o estado para definir se o
// componente com os resultados da busca, o
// SearchResults.jsx, deve trazer resultados
// do endpoint de fotos ou de vídeos. Esse estado
// é controlado pelos filtros no próprio componente
// de SearchResult.jsx
const slice = createSlice({
  name: "search",
  initialState: {
    searchFor: "photos",
  },
  reducers: {
    changeSearch(state, action) {
      state.searchFor = action.payload;
    },
  },
});

export const { changeSearch } = slice.actions;
export default slice.reducer;
