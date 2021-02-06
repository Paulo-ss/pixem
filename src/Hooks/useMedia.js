import React from "react";

// Custom hook que compara o tamanho da tela atual
// com um valor de media query recebido como argumento
// e retorna um valor boolean
const useMedia = (media) => {
  const [match, setMatch] = React.useState(null);

  React.useEffect(() => {
    const checkMedia = () => {
      const { matches } = window.matchMedia(media);
      setMatch(matches);
    };

    checkMedia();
    window.addEventListener("resize", checkMedia);

    return () => {
      window.removeEventListener("resize", checkMedia);
    };
  }, [media]);

  return match;
};

export default useMedia;
