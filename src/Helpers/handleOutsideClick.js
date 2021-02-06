// Função helper que fecha os elementos quando
// o usuário clica fora dele
const handleOutsideClick = (element, callback) => {
  const clickOutside = ({ target }) => {
    if (!element.contains(target)) {
      callback();
      document.documentElement.removeEventListener("click", clickOutside);
    }
  };

  document.documentElement.addEventListener("click", clickOutside);
};

export default handleOutsideClick;
