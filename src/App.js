import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotosCuratedPage from "./Components/Curated/PhotosCuratedPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import GoToTopBtn from "./Components/Helpers/GoToTopBtn";
import Home from "./Components/Home/Home";
// Importando o CSS gerado pelo SASS com todo
// o estilo utilizado no site
import "./CSS/style.min.css";

function App() {
  return (
    <BrowserRouter>
      <section>
        {/* Header principal do site */}
        <Header />
        <Routes>
          {/* Home do site */}
          <Route path="/" element={<Home />} />
          {/* Página com as fotos curated */}
          <Route path="curated" element={<PhotosCuratedPage />} />
        </Routes>
        {/* Botão da o scroll para o topo da página */}
        <GoToTopBtn />
        {/* Rodapé do site */}
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
