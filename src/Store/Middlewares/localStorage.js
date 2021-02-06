// Middleware que verifica se o objeto da action
// tem um meta de localStorage e, caso retorne true,
// salva essa chave e o valor no localStorage
const localStorage = (store) => (next) => (action) => {
  const result = next(action);

  // Lidando com o meta da action
  if (action.meta !== undefined && action.meta.localStorage !== undefined) {
    window.localStorage.setItem(
      action.meta.localStorage,
      JSON.stringify(action.payload)
    );
  }

  return result;
};

export default localStorage;
