import React from 'react';
import 'tachyons';

const Info = () => {
    return (
        <div className='row'>
            <div id='intro' className='col-sm-12'>
                <h1 id='introHeader'>No more waiting between characters!</h1>
                <div id='introInfo' className='float-left col-sm-12'>
                    <h5 className='col sm-12 col-md-6'>
                        Gamers don't want to spend hours of precious game time building a character. Gamers want to game! Whether you are a
                        new player or an experienced DnD-er, taking away from dice rolls and dragon-slaying makes everyone's experience worse.
                        With EasyDnd, you can now create a fully-fleshed character with the click of a button! Randomize or choose your class and race, we
                        fill in the stats, we create the backstory, and we give you back your gametime!
                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        (Too many pieces of paper, too little time)                    
                    </h5>
                    <img id='infoImage' className='float-right grow' src='https://www.dyslexic-charactersheets.com/images/pathfinder-stack.png' alt='DND pathfinder character sheets' />
                </div>
            </div>
        </div>
    )
}

export default Info;