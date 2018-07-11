import React from 'react';
import CharCard from './CharCard';

const CardList = ({ character }) => {
    const cardArray = character.map((user, i) => {
        return <CharCard key={i} id={character[i].id} name={character[i].name} gender={character[i].gender} dex={character[i].dex} intel={character[i].intel} cha={character[i].cha} stre={character[i].stre} con={character[i].con} wis={character[i].wis} />
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;