import React from "react";
import Input from "../Inputs/Input";
// Importando o svg de pesquisa
import { ReactComponent as SerchBlack } from "../../Assets/searchBlack.svg";
import { ReactComponent as SearchWhite } from "../../Assets/searchWhite.svg";
import { useSelector } from "react-redux";

const Search = ({ className }) => {
  // Estado do campo de pesquisa
  const [searchQuery, setSearchQuery] = React.useState("");
  // Acessando o estado do tema atual do site
  const { theme } = useSelector((state) => state.userInterface);
  const element = React.useRef(null);

  // Lógica para quando o input for sair da tela,
  // ele gruda no topo da página
  React.useLayoutEffect(() => {
    // Função que ao resize da página atualiza o valor
    // da distância do topo da página do elemento
    const elementPosition = () => {
      // Acessando o valor do topo do elemento no hook useRef
      return element.current.offsetTop;
    };

    elementPosition();

    // Função que lida com o scroll
    const onScroll = () => {
      // Pegando a posição do scroll na página
      const scrollPosition = window.pageYOffset;

      // Comparando a posição do scroll com a distância
      // do topo do elemento
      if (scrollPosition > elementPosition()) {
        element.current.classList.add("sticky");
      } else {
        element.current.classList.remove("sticky");
      }
    };

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", elementPosition);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", elementPosition);
    };
  }, []);

  return (
    <form ref={element} className={`searchForm ${className ? className : ""}`}>
      <Input
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)}
        type="text"
        className={`searchInput ${
          theme ? "darkTheme darkTwoBg" : "lightTheme lightTwoBg"
        }`}
        id="search"
        placeholder="Pesquise por natureza, tecnologia, pessoas..."
        autoComplete="off"
      />
      <button
        type="submit"
        className={`searchBtn ${theme ? "darkTwoBg" : "lightTwoBg"}`}
      >
        {theme ? <SearchWhite /> : <SerchBlack />}
      </button>
    </form>
  );
};

export default Search;
