import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Inputs/Input";
// Importando os SVGs das setas
import { ReactComponent as PrevIcon } from "../../Assets/prev.svg";
import { ReactComponent as NextIcon } from "../../Assets/next.svg";
import { changePage } from "../../Store/Reducers/curated.reducer";

const Pagination = ({ reducer }) => {
  // Página atual
  const { perPage, page, data } = useSelector((state) => state[reducer]);
  // Dispatch
  const dispatch = useDispatch();
  // Número total de resultados
  const totalResults = data?.total_results;
  // Número total de páginas
  const totalPages = Math.ceil(totalResults / perPage);
  // Estado do input
  const [pageInput, setPageInput] = React.useState(page);

  // Função que faz o scroll pro topo
  // quando a página é trocada
  const goToTop = () => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Função que vai para a página anterior do botão prev page
  const prevPage = () => {
    goToTop();

    if (page > 1) {
      dispatch(changePage(page - 1));
      setPageInput(page - 1);
    }
  };

  // Função que vai para a próxima página do botão next page
  const nextPage = () => {
    goToTop();

    if (page < totalPages) {
      dispatch(changePage(page + 1));
      setPageInput(page + 1);
    }
  };

  // Função que vai para a página digitada no input
  const goToPage = (e) => {
    e.preventDefault();

    if (pageInput > 0 && pageInput <= totalPages) {
      goToTop();
      dispatch(changePage(pageInput));
    } else {
      window.alert(`Por favor, digite um valor entre 1 e ${totalPages}`);
    }
  };

  return (
    <div className="paginacao">
      <div className="paginationControls">
        <button type="button" className="prevPage" onClick={prevPage}>
          <PrevIcon />
          Anterior
        </button>
        <div className="totalPages">
          <form onSubmit={goToPage}>
            <Input
              value={pageInput}
              onChange={({ target }) => setPageInput(target.value)}
              type="text"
              className="pageInput"
              id="pageInput"
            />
          </form>
          <p className="total"> de {totalPages} </p>
        </div>
        <button type="button" className="nextPage" onClick={nextPage}>
          Próxima
          <NextIcon />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
