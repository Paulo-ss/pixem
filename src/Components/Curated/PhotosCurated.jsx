import React from "react";
import { useSelector } from "react-redux";
import Pexels from "../Helpers/Pexels";
import SeeMoreBtn from "./SeeMoreBtn";
import ShapeDivider from "../Helpers/ShapeDivider";
import PhotosCuratedGrid from "./PhotosCuratedGrid";
import Pagination from "./Pagination";

const Photos = ({ animateInstantly, shape, seeMore, subText, pagination }) => {
  // Tema atual do site
  const { theme } = useSelector((state) => state.userInterface);

  // Ref para o elemento com animação de entrada
  const element = React.useRef(null);

  // Animando a seção quando ela entrar na tela
  // Animando a seção quando ela entrar na tela
  React.useLayoutEffect(() => {
    // Valor de 60% da tela do usuário
    const windowSize = window.innerHeight * 0.6;

    // Distância do topo da página do elemento
    // no ref
    const elementTopPosition =
      element.current.getBoundingClientRect().top - windowSize;

    // Função que lida com o scroll
    const onScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition > elementTopPosition) {
        element.current.classList.add("animateEntry");
      }
    };

    // Função que faz o scroll da página direto
    // para o topo quando o usuário entra na página
    // de fotos curated
    const scrollToTop = () => {
      document.body.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    // A prop animateInstantly define se quando o
    // componente for renderizado, a animação de
    // entrada de ocorrer ou não, pois quando esse
    // componente é usado na home, a animação só
    // deve ocorre quando o elemento aparacer na tela
    // com o scroll
    if (animateInstantly) {
      onScroll();
      scrollToTop();
    }

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [animateInstantly]);

  return (
    <section
      className={`photos ${
        theme ? "darkTheme darkThreeBg" : "lightTheme lightThreeBg"
      } ${shape ? "shapeDividerGutter" : ""}`}
    >
      {/* Shape divider entre as sections, só aparece se a
      prop shape for true */}
      {shape && <ShapeDivider />}
      <div className="container">
        <div className="wrapper" ref={element}>
          <div className="title">
            <h1> Fotos Curated </h1>
          </div>
          {subText && <p className="subText"> {subText} </p>}
          {/* Grid com as fotos retornadas pela API */}
          <PhotosCuratedGrid />
          {/* Texto atribuindo créditos a Pexels */}
          <Pexels />
          {/* Botão de ver mais que leva para outra página com mais resultados,
          só aparece se a prop de seeMore for true */}
          {seeMore && <SeeMoreBtn path="/curated" text="Ver mais" />}
          {/* Páginação */}
          {pagination && <Pagination reducer="curated" />}
        </div>
      </div>
    </section>
  );
};

export default Photos;
