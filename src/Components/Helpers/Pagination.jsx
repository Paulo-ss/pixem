import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../Inputs/Input";
// Importando os SVGs das setas
import { ReactComponent as PrevIcon } from "../../Assets/prev.svg";
import { ReactComponent as NextIcon } from "../../Assets/next.svg";
import PropTypes from "prop-types";

const Pagination = ({ reducer, changePage }) => {
  // Página atual
  const { data } = useSelector((state) => state[reducer]);
  const { perPage, page } = useSelector(
    (state) => state[reducer].asyncActionArgs
  );
  // Dispatch
  const dispatch = useDispatch();
  // Número total de resultados
  const totalResults = data && data.total_results;
  // Número total de páginas
  const totalPages = Math.ceil(totalResults / perPage);
  // Estado do input
  const [pageInput, setPageInput] = React.useState(page);

  // Sempre que a página mudar, o valor do
  // input é setado para ser igual ao da
  // página atual
  React.useEffect(() => {
    setPageInput(page);
  }, [page]);

  // Função que faz o scroll pro topo
  // quando a página é trocada
  const goToTop = () => {
    document.body.scrollIntoView({ behavior: "auto", block: "start" });
  };

  // Função que vai para a página anterior do botão prev page
  const prevPage = ({ currentTarget }) => {
    if (page > 1) {
      goToTop();
      dispatch(changePage(page - 1));
      setPageInput(page - 1);
      currentTarget.blur();
    }
  };

  // Função que vai para a próxima página do botão next page
  const nextPage = ({ currentTarget }) => {
    if (page < totalPages) {
      goToTop();
      dispatch(changePage(page + 1));
      setPageInput(page + 1);
      currentTarget.blur();
    }
  };

  // Função que vai para a página digitada no input
  const goToPage = (e) => {
    e.preventDefault();

    if (pageInput > 0 && pageInput <= totalPages) {
      goToTop();
      dispatch(changePage(+pageInput));
    } else {
      window.alert(`Por favor, digite um valor entre 1 e ${totalPages}`);
    }
  };

  return (
    <>
      {data?.total_results === 0 ? null : (
        <div className="paginacao">
          <div className="paginationControls">
            <button
              type="button"
              className="prevPage"
              style={{ display: `${page === 1 ? "none" : "flex"}` }}
              onClick={prevPage}
            >
              <PrevIcon />
              <p> Anterior </p>
            </button>
            <div className="totalPages">
              <form onSubmit={goToPage}>
                <Input
                  value={pageInput}
                  setValue={({ target }) => setPageInput(target.value)}
                  type="text"
                  className="pageInput"
                  id="pageInput"
                  autoComplete="off"
                />
              </form>
              <p className="total"> de {totalPages} </p>
            </div>
            <button
              type="button"
              className="nextPage"
              style={{ display: `${page === totalPages ? "none" : "flex"}` }}
              onClick={nextPage}
            >
              <p> Próxima </p>
              <NextIcon />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

Pagination.propTypes = {
  reducer: PropTypes.string.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Pagination;
