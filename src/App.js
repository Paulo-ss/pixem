import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PhotosCuratedPage from "./Components/Curated/PhotosCuratedPage";
import Footer from "./Components/Footer/Footer";
import GetPhoto from "./Components/GetPhoto/GetPhoto";
import Header from "./Components/Header/Header";
import GoToTopBtn from "./Components/Helpers/GoToTopBtn";
import Home from "./Components/Home/Home";
import ScrollToTop from "./Components/Helpers/ScrollToTop";
import SearchResults from "./Components/SearchResults/SearchResults";
// Importando o CSS gerado pelo SASS com todo
// o estilo utilizado no site
import "./CSS/style.min.css";
import PopularVideos from "./Components/PopularVideos/PopularVideos";

function App() {
  return (
    <BrowserRouter>
      <section>
        <ScrollToTop />
        {/* Header principal do site */}
        <Header />
        <Routes>
          {/* Home do site */}
          <Route path="/" element={<Home />} />
          {/* Página com as fotos curated */}
          <Route path="curated" element={<PhotosCuratedPage />} />
          {/* Páginas dos vídeos populares */}
          <Route path="videos-populares" element={<PopularVideos />} />
          {/* Página da foto específica */}
          <Route path="foto/:photoId/:query" element={<GetPhoto />} />
          {/* Página com os resultados da pesquisa */}
          <Route path="resultados/:query" element={<SearchResults />} />
        </Routes>
        {/* Botão que faz o scroll para o topo da página */}
        <GoToTopBtn />
        {/* Rodapé do site */}
        <Footer />
      </section>
    </BrowserRouter>
  );
}

export default App;
