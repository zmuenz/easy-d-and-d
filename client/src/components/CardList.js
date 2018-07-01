import React from 'react';
import Card from './Card';

const CardList = ({ Character }) => {
    const cardArray = Character.map((user, i) => {
        return <Card key={i} id={Character[i].id} name={Character[i].character_name} gender={Character[i].gender} race={Character[i].race} />
    })
    return (
        <div>
            {cardArray}
        </div>
    )
}

export default CardList;