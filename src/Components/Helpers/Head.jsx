import React from "react";

// Componente que atualiza o título e a descrição
// de cada página do site
const Head = ({ title, content }) => {
  React.useEffect(() => {
    // Alterando o título
    document.title = `${title} | Pixem Stock`;

    // Alterando o content do elemento meta
    // de descrição do head no index.html
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", content);
  }, [title, content]);

  return null;
};

export default Head;
