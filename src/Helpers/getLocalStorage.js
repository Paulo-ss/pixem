// Função para retornar valores do localStorage
const getLocalStorage = (key, initial) => {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch {
    return initial;
  }
};

export default getLocalStorage;
