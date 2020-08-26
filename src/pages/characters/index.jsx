import React, { useEffect, useState } from "react";
import CharacterList from "../../components/character-list";
import { Link, useParams, useHistory } from "react-router-dom";
import { notification } from "antd";
import styled from "styled-components";

const Characters = ({ setCharacters, characters }) => {
  const { page } = useParams();
  const history = useHistory();
  const [charactersAPI, setCharactersAPI] = useState([]);

  const handleOnSelect = (newCharacter) => {
    const alreadyAdd = characters.some(
      ({ name }) => name === newCharacter.name
    );

    if (alreadyAdd) {
      return notification.error({
        key: newCharacter.name,
        message: "Erro",
        description: "Personagem já foi adicionado!",
      });
    }

    notification.success({
      key: newCharacter.name,
      message: "Boa!",
      description: "Personagem adicionado!",
    });

    setCharacters([...characters, newCharacter]);
  };

  useEffect(() => {
    if (page < 1) return history.push("/rick-and-morty/1");

    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then(({ results }) => setCharactersAPI(results || []));
  }, [history, page, setCharactersAPI]);

  return (
    <CharacterList
      onSelect={handleOnSelect}
      characters={charactersAPI}
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
