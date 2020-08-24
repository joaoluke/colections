import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Card } from "antd";

const Characters = () => {
  const { page } = useParams();
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then(({ results }) => setCharacters(results));
  }, [page]);

  return (
    <div>
      <div>
        <Link to={`/rick-and-morty/${page - 1}`}>Anterior</Link>
        <Link to={`/rick-and-morty/${parseInt(page) + 1}`}>Próximo</Link>
      </div>
      {characters.map(({ name, image, species }, key) => (
        <Card
          key={key}
          hoverable
          style={{ width: 240 }}
          cover={<img alt="example" src={image} />}
        >
          <Card.Meta title={name} description={species} />
        </Card>
      ))}
    </div>
  );
};

export default Characters;
