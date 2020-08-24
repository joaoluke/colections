import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home, Characters } from "./pages/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/rick-and-morty/:page">
          <Characters />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
