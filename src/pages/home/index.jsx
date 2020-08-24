import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      Bem vindo!
      <div>
        <Link to="/rick-and-morty/1">Rick And Morty</Link>
      </div>
    </div>
  );
};

export default Home;
