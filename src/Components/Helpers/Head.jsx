import React from "react";
import PropTypes from "prop-types";

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

Head.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Head;
