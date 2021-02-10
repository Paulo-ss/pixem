import React from "react";
import { useSelector } from "react-redux";
import Pexels from "../../../Helpers/Pexels";
import SeeMoreBtn from "../../../Helpers/SeeMoreBtn";
import ShapeDivider from "../../../Helpers/ShapeDivider";
import PhotosCuratedGrid from "./PhotosCuratedGrid";

const Photos = ({ title, shape, seeMore }) => {
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

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      className={`photos ${
        theme ? "darkTheme darkThreeBg" : "lightTheme lightThreeBg"
      }`}
    >
      {/* Shape divider entre as sections, só aparece se a
      prop shape for true */}
      {shape && <ShapeDivider />}
      <div className="container">
        <div className="wrapper" ref={element}>
          <div className="title">
            <h1> {title} </h1>
          </div>
          {/* Grid com as fotos retornadas pela API */}
          <PhotosCuratedGrid />
          {/* Texto atribuindo créditos a Pexels */}
          <Pexels />
          {/* Botão de ver mais que leva para outra página com mais resultados,
          só aparece se a prop de seeMore for true */}
          {seeMore && <SeeMoreBtn path="/" text="Ver mais" />}
        </div>
      </div>
    </section>
  );
};

export default Photos;
