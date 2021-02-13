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

// Endpoint de uma foto específica
export const GET_PHOTO = (photoId) => ({
  url: `https://api.pexels.com/v1/photos/${photoId}`,
  options: {
    method: "GET",
    headers: {
      Authorization: api_key,
    },
  },
});

// Endpoint dos resultados de busca para fotos
export const SEARCH_PHOTOS = (query, orientation, size, perPage, page) => ({
  url: `https://api.pexels.com/v1/search?query=${query}&orientation=${orientation}&size=${size}&per_page=${perPage}&page=${page}&locale=pt-BR`,
  options: {
    method: "GET",
    headers: {
      Authorization: api_key,
    },
  },
});

// Endpoint dos vídeos populares
export const POPULAR_VIDEOS = (perPage, page) => ({
  url: `https://api.pexels.com/videos/popular?per_page=${perPage}&page=${page}`,
  options: {
    method: "GET",
    headers: {
      Authorization: api_key,
    },
  },
});

// Endpoint dos resultados de busca pra vídeos
export const SEARCH_VIDEOS = (query, orientation, size, perPage, page) => ({
  url: `https://api.pexels.com/videos/search?query=${query}&orientation=${orientation}&size=${size}&per_page=${perPage}&page=${page}&locale=pt-BR`,
  options: {
    method: "GET",
    headers: {
      Authorization: api_key,
    },
  },
});

// Endpoint que retorna um vídeo específico
export const GET_VIDEO = (videoId) => ({
  url: `https://api.pexels.com/videos/videos/${videoId}`,
  options: {
    method: "GET",
    headers: {
      Authorization: api_key,
    },
  },
});
