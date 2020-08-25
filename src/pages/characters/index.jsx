import React, { useEffect, useState } from "react";
import CharacterList from "../../components/character-list";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";

const Characters = ({ onClick }) => {
  const { page } = useParams();
  const history = useHistory();
  const [characters, setCharacters] = useState([]);

  const handleClick = (newCharacter) => {
    onClick((prevState) => [...prevState, newCharacter]);
  };

  useEffect(() => {
    if (page < 1) return history.push("/rick-and-morty/1");

    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then(({ results }) => setCharacters(results || []));
  }, [history, page]);

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
