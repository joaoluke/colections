import React from "react";
import CharacterList from "../../components/character-list";

const Home = ({ characters }) => {
  return <CharacterList header="Sua coleção!" characters={characters} />;
};

export default Home;
