import React from "react";
import CharacterList from "../../components/character-list";

const Home = ({ characters, setCharacters }) => {
  const handleOnSelect = ({ name }) => {
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
