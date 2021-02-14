import React from "react";
import PropTypes from "prop-types";

const TextAnimation = ({ children }) => {
  // Ref para o elemento que tem o texto
  // a ser animado
  const element = React.useRef(null);

  // Animação do texto sendo escrito na tela
  React.useLayoutEffect(() => {
    // Selecionando o elemento de texto dentro do
    // elemento pai no ref para acessar o texto
    const textElement = element.current.children[0];
    const letras = textElement.innerHTML.split("");
    textElement.innerText = "";

    // Animando a entrada de cada letra
    let timeout;
    letras.forEach((letra, index) => {
      timeout = setTimeout(() => {
        textElement.innerText += letra;
      }, index * 60);
    });

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div ref={element} className={`textAnimation`}>
      {children}
    </div>
  );
};

TextAnimation.propTypes = {
  children: PropTypes.node.isRequired,
};

export default TextAnimation;
