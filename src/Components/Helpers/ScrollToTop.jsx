import React from "react";
import { useLocation } from "react-router-dom";

// Componente para dar um scroll pro topo da
// página sempre que uma navegação acontecer
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    document.body.scrollIntoView({ behavior: "auto", block: "start" });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
