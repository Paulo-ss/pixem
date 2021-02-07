// Custom Hook que anima os elementos da página
// conforme o usuário faz o scroll
const scrollAnimation = (elements, CSSclass) => {
  // Função que pega a distância do elemento em
  // relação ao topo da página
  const topPosition = (element) => ({
    element,
    offsetTop: element.getBoundingClientRect().top,
  });

  // Retornando o valor da distância do topo de cada
  // elemento na array elements recebida por argumento
  const elementsTopPosition = elements.map((element) => topPosition(element));
  console.log(elementsTopPosition);

  // Função que lida com o scroll
  const onScroll = () => {
    // Pegando a posição do scroll na página
    const scrollPosition = window.pageYOffset;
    console.log(scrollPosition);

    // Comparando a posição do scroll com a distância do
    // topo da página de cada elemento
    elementsTopPosition.forEach((i) => {
      if (scrollPosition > i.offsetTop) {
        i.element.classList.add(CSSclass);
      } else {
        i.element.classList.remove(CSSclass);
      }
    });
  };

  window.addEventListener("scroll", onScroll);
};

export default scrollAnimation;
