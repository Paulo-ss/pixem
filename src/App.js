import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
// Importando o CSS gerado pelo SASS com todo
// o estilo utilizado no site
import "./CSS/style.min.css";

function App() {
  return (
    <section>
      {/* Header principal do site */}
      <Header />
      <Router>
        <Switch>
          {/* Home do site */}
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
      {/* Rodapé do site */}
      <Footer />
    </section>
  );
}

export default App;
