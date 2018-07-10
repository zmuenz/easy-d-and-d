import React from 'react';
import 'tachyons';

const CharJumbo = () => {
    return (
        <div id='charJumbo' className='jumbotron bg-dark text-white tc mb-0'>
            <h1 className='f1'>Welcome to the Game, (insert character name)</h1>
            <p className='f3'>Bring your character to life</p>
        </div>
    )
}

export default CharJumbo;