import { createSlice } from "@reduxjs/toolkit";

/**
 * Método que retorna um objeto com todas as
 * propriedades do createSlice, além de uma
 * Action Creator assíncrona (asyncAction),
 * que realiza um fetch no endpoint fornecido
 * através do parâmetro config.fetchConfig,
 * gerenciando estados de loading, data e error
 * @param {Object} config
 * @param {String} config.name
 * @param {Object} config.initialState
 * @param {Object} config.reducers
 * @param {Function} config.fetchConfig
 */

// Função helper para criar slices
// com actions asyncs
const createAsyncSlice = (config) => {
  const slice = createSlice({
    name: config.name,
    initialState: {
      loading: false,
      data: null,
      error: null,
      // É possível adicionar novos estados ou
      // escrever por cima dos já existentes
      ...config.initialState,
    },
    reducers: {
      fetchStarted(state) {
        state.loading = true;
      },
      fetchSuccess(state, action) {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      },
      fetchFailed(state, action) {
        state.loading = false;
        state.data = null;
        state.error = action.payload;
      },
      // É possível adicionar novas actions creators
      // no reducer ou escrever por cima dos já existentes
      ...config.reducers,
    },
  });

  // Desestruturando as actions
  const { fetchStarted, fetchSuccess, fetchFailed } = slice.actions;

  // Action creator async que faz um fetch no endpoint fornecido pelo
  // config.fetchConfig, que retorna um objeto com url e options
  const asyncAction = (payload) => async (dispatch) => {
    try {
      dispatch(fetchStarted());

      const { url, options } = config.fetchConfig(payload);
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      return dispatch(fetchSuccess(data));
    } catch (error) {
      return dispatch(fetchFailed(error.message));
    }
  };

  // Retornando todas as propriedades do slice e a
  // action assíncrona
  return { ...slice, asyncAction };
};

// Exportando a função do createAsyncSlice
export default createAsyncSlice;
