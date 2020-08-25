import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home, Characters } from "./pages/";
import { MdCollections } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";

import styled from "styled-components";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  return (
    <div className="App">
      <TopBar>
        <StyledLink to="/">
          <MdCollections />
        </StyledLink>
        <StyledLink to="/rick-and-morty/1">
          <BsPeopleFill />
        </StyledLink>
      </TopBar>

      <Body>
        <Switch>
          <Route path="/rick-and-morty/:page">
            <Characters onClick={setCharacters} />
          </Route>
          <Route path="/">
            <Home characters={characters} />
          </Route>
        </Switch>
      </Body>
    </div>
  );
}

export default App;

const TopBar = styled.div`
  background-color: white;
  width: 100%;
  position: fixed;
  top: 0;
  padding: 5px;
  z-index: 10;
`;

const Body = styled.div`
  margin-top: 38px;
`;

const StyledLink = styled(Link)`
  margin: 30px;
`;
