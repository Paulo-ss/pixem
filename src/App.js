import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
// Importando o CSS gerado pelo SASS com todo
// o estilo utilizado no site
import "./CSS/style.min.css";

function App() {
  return (
    <section>
      <Header />
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
