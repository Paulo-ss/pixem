// Acessando a chave da API através de uma
// environment variable
const api_key = process.env.REACT_APP_API_KEY;

// Endpoint fotos curated
export const GET_CURATED_PHOTOS = (perPage, page) => ({
  url: `https://api.pexels.com/v1/curated?per_page=${perPage}&page=${page}`,
  options: {
    method: "GET",
    headers: {
      Authorization: api_key,
    },
  },
});
