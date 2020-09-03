import React, { useEffect, useState } from "react";
import CharacterList from "../character-list";
import { Link, useParams, useHistory } from "react-router-dom";
import { notification } from "antd";
import styled from "styled-components";

const Characters = ({ setCharacters, characters }) => {
  const params = useParams();
  const [ charactersAPI, setCharactersAPI ] = useState([]);
  const [ offset, setOffset ] = useState(0);
  const [ page, setPage ] = useState(params.page);

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
    let offsetPage = offset;
    if (page < 1 && page > 9) {
        offsetPage = offsetPage + page - 1 * 20
        setOffset(offset + page - 1 * 20)
    }

    setPage(1);
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offsetPage}&limit=20`)
        .then((res) => res.json())
        .then(({ results }) => {
            results = results.map(pokemon => {
                const brokenUrl = pokemon.url.split("/");
                const id = brokenUrl[brokenUrl.length - 2]
                pokemon.image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
                return pokemon;
            })
            setCharactersAPI(results || [])
            
        
        });
  }, [offset, page, setCharactersAPI]);
  console.log(charactersAPI)
  return (
    <CharacterList
        onSelect={handleOnSelect}
        characters={charactersAPI}
        header={
            <StyledControl>
                <Link onClick={() => {
                    setOffset(offset - 20);
                    if (offset > 0) { setOffset(offset - 20) } 
                    if (offset === 0) { setOffset(0)}
                    if (page === 1) { setPage(2)}
                }}
                    to={`/rick-and-morty/${page - 1}`}
                >
                        {" < "}Anterior</Link>
                {params.page}
                <Link onClick={() => {
                    setOffset(offset + 20);
                    if (offset < 130) { setOffset(offset + 20) }
                    else if (offset > 150) { setOffset(150) }
                }}
                    to={`/rick-and-morty/${page + 1}`}
                >
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
