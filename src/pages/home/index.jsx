import React from "react";
import { notification } from "antd";
import CharacterList from "../../components/character-list";

const Home = ({ characters, setCharacters }) => {
  const handleOnSelect = ({ name }) => {
    notification.info({
      key: name,
      message: "Boa!",
      description: "Personagem removido!",
    });
    setCharacters(characters.filter((character) => character.name !== name));
  };

  return (
    <CharacterList
      onSelect={handleOnSelect}
      header="Sua coleção!"
      characters={characters}
    />
  );
};

export default Home;
