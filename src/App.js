import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
// Importando o CSS gerado pelo SASS com todo
// o estilo utilizado no site
import "./CSS/style.min.css";

function App() {
  return (
    <section>
      <Header />
      <Router>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </Router>
    </section>
  );
}

export default App;
