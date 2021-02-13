import React from "react";
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";

// Componente helper para pegar da url o parâmetro
// da query de busca e fazer um dispatch no reducer
// passado com a query
const GetSearchQuery = ({ setQuery }) => {
  // dispatch
  const dispatch = useDispatch();

  // URL da página
  const { pathname } = useLocation();

  // Query de busca da url
  const { query } = useParams();

  // Função que limpa a query de busca
  const clearQuery = (query) => {
    return query.replace(/\W/g, " ");
  };

  // Efeito que ocorre toda vez que a url
  // ou a query de pesquisa mudam
  React.useEffect(() => {
    if (query) {
      dispatch(setQuery(clearQuery(query)));
    }
  }, [dispatch, setQuery, pathname, query]);

  return null;
};

export default GetSearchQuery;
