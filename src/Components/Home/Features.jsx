import React from "react";
import { useSelector } from "react-redux";
// Importando os ícones
import { ReactComponent as FreeIcon } from "../../Assets/free.svg";
import { ReactComponent as FreeWhiteIcon } from "../../Assets/freeWhite.svg";
import { ReactComponent as EscolherIcon } from "../../Assets/escolher.svg";
import { ReactComponent as EscolherWhiteIcon } from "../../Assets/escolherWhite.svg";
import { ReactComponent as VideoIcon } from "../../Assets/videos.svg";
import { ReactComponent as VideoWhiteIcon } from "../../Assets/videosWhite.svg";

const Features = () => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);
  // Ref para animar os elementos
  const wrapper = React.useRef(null);

  // Animação quando o elemento entrar na tela
  React.useLayoutEffect(() => {
    // Valor da metade da tela do usuário para que
    // a animação ocorra quando o elemento estiver
    // entrando na tela
    const halfWindow = window.innerHeight * 0.5;

    // Acessando a distância do topo da página
    // do elemento no ref
    const elementTopPosition = wrapper.current.offsetTop - halfWindow;

    // Filhos do elemento no ref
    const childrenElements = [...wrapper.current.children];

    // Função que lida com o scroll
    const onScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > elementTopPosition) {
        childrenElements.forEach((element, index) => {
          setTimeout(() => {
            element.classList.add("animateEntry");
          }, index * 300);
        });
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      className={`features ${
        theme ? "darkTheme darkTwoBg" : "lightTheme lightTwoBg"
      }`}
    >
      <div className="container">
        <div className="title">
          <h1> A Pixem te oferece o melhor </h1>
        </div>
        <div className={`featuresWrapper`} ref={wrapper}>
          <div className={`feature`}>
            <div className={`icon ${theme ? "darkThreeBg" : "lightThreeBg"}`}>
              {theme ? <FreeWhiteIcon /> : <FreeIcon />}
            </div>
            <p className="subtitle"> Gratuidade </p>
            <p className="text">
              {" "}
              Tenha acesso as melhores fotos e vídeos de maneira totalmente
              gratuita{" "}
            </p>
          </div>
          <div className={`feature`}>
            <div className={`icon ${theme ? "darkThreeBg" : "lightThreeBg"}`}>
              {theme ? <EscolherWhiteIcon /> : <EscolherIcon />}
            </div>
            <p className="subtitle"> Fotos curated </p>
            <p className="text">
              {" "}
              Fotos escolhidas a dedo pela Pexels que são atualizadas todos os
              dias para você ficar ligado nas tendências{" "}
            </p>
          </div>
          <div className={`feature`}>
            <div className={`icon ${theme ? "darkThreeBg" : "lightThreeBg"}`}>
              {theme ? <VideoWhiteIcon /> : <VideoIcon />}
            </div>
            <p className="subtitle"> Vídeo populares </p>
            <p className="text"> Veja os vídeos mais populares do momento </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
