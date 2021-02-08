import React from "react";
// Importando o ícone de seta pra cima
import { ReactComponent as UpArrowIcon } from "../../Assets/upArrow.svg";

const GoToTopBtn = () => {
  // Ref para o botão que da o scroll pro topo
  const topBtn = React.useRef(null);

  // Função que da o scroll pro topo da página
  const goToTop = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Verificando se o scroll está no topo da
  // página. Se estiver, esconde o botão
  React.useLayoutEffect(() => {
    const onScroll = () => {
      const scrollPosition = window.pageYOffset;

      if (scrollPosition === 0) {
        topBtn.current.classList.remove("active");
      } else {
        topBtn.current.classList.add("active");
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className={`goToTop`} onClick={goToTop} ref={topBtn}>
      <button className={`topBtn`}>
        <UpArrowIcon />
      </button>
    </div>
  );
};

export default GoToTopBtn;
