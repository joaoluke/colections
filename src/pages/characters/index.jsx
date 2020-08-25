import React, { useEffect, useState } from "react";
import CharacterList from "../../components/character-list";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";

const Characters = ({ onClick }) => {
  const { page } = useParams();
  const [characters, setCharacters] = useState([]);

  const handleClick = (newCharacter) => {
    onClick((prevState) => [...prevState, newCharacter]);
  };

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then(({ results }) => setCharacters(results));
  }, [page]);

  return (
    <CharacterList
      onClick={handleClick}
      characters={characters}
      header={
        <StyledControl>
          <Link to={`/rick-and-morty/${page - 1}`}> {" < "}Anterior</Link>
          {page}
          <Link to={`/rick-and-morty/${parseInt(page) + 1}`}>
            Próximo{" > "}
          </Link>
        </StyledControl>
      }
    />
  );
};

export default Characters;

const StyledControl = styled.div`
  padding: 10px;
  max-width: 500px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
