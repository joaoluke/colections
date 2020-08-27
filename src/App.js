import React, { useState } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Home, Characters, Chart } from "./pages/";
import { MdCollections } from "react-icons/md";
import { BsPeopleFill } from "react-icons/bs";
import { AiFillPieChart } from "react-icons/ai";
import { motion } from "framer-motion";

import styled from "styled-components";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);

  return (
    <div className="App">
      <TopBar>
        <TobBarLinks>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
            <StyledLink to="/">
              <MdCollections />
            </StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
            <StyledLink to="/rick-and-morty/1">
              <BsPeopleFill />
            </StyledLink>
          </motion.div>
          <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 0.8 }}>
            <StyledLink to="/pie">
              <AiFillPieChart />
            </StyledLink>
          </motion.div>
        </TobBarLinks>
      </TopBar>

      <Body>
        <Switch>
          <Route path="/pie">
            <Chart characters={characters} />
          </Route>
          <Route path="/rick-and-morty/:page">
            <Characters setCharacters={setCharacters} characters={characters} />
          </Route>
          <Route path="/">
            <Home characters={characters} setCharacters={setCharacters} />
          </Route>
        </Switch>
      </Body>
    </div>
  );
}

export default App;

const TobBarLinks = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

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
