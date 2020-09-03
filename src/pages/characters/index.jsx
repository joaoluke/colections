import React, { useState } from "react";
import Pokemon from "../../components/pokemon"
import RickAndMorty from "../../components/rick-and-morty";
import { Button } from "antd";

const Characters = ({ setCharacters, characters }) => {
    const [ list, setList] = useState(true);

    const changeList = () => {
        setList(!list)
    }

    return (
        <>
            <div style={{width: "100%"}}>
                <Button onClick={changeList}>Trocar</Button>
            </div>
            {
                list === true ? 
                (<RickAndMorty characters={characters} setCharacters={setCharacters} />) :
                (<Pokemon characters={characters} setCharacters={setCharacters} />)
            }
        </>
    )
} 

export default Characters;