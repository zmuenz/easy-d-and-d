import React from 'react';
import 'tachyons';


const Card = ({ character_name, gender, race }) => {
    return (
        <div className="bg-light-green tc dib br3 pa3 ma2 grow bw2 shadow-5">
            <img alt='character' src={`https://robohash.org/?200x200`} />
            <div>
                <h2>{character_name}</h2>
                <p>{gender}</p>
                <p>{race}</p>
            </div>
        </div>
    );
}

export default Card;