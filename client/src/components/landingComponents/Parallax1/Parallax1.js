import React from 'react';
import 'tachyons';

const Parallax1 = () => {
    return (
        <div id='parallax1' className="parallax-container" style={{ height: '500px' }}>
            <div className="parallax"><img id='dice' src="http://paizo.com/image/content/CarrionCrown/PZO9046-BestiaryOpener.jpeg" alt='dnd d20 over character sheet' /></div>
            <h1 className='text-white' style={{marginTop: '30px'}}>A way out of the darkness!</h1>
            <div id="landingCards" style={{ display: 'flex', alignItems: 'space-around', flexFlow: 'row wrap' }}>
                <div id='card1' className="card col-4 col-sm-3 col-md-3 text-center text-light grow">
                    <i className='large material-icons card-img-top'>brightness_5</i>
                    <div className="card-body">
                        <h5 className="card-title d-none d-block">A Shining Beacon of Hope</h5>
                        <p className="card-text d-none d-md-block">Get out of the dungeon of paperwork and begin gaming in minutes!</p>
                    </div>
                </div>
                <div id='card2' className="card col-4 col-sm-3 col-md-3 text-center text-light grow">
                <i className='large material-icons card-img-top'>invert_colors</i>
                    <div className="card-body">
                        <h5 className="card-title d-none d-block">A Tall, Cool Glass of Water</h5>
                        <p className="card-text d-none d-md-block">Finally, everything you have been waiting for in easy character creation!</p>
                    </div>
                </div>
                <div id='card3' className="card col-4 col-sm-3 col-md-3 text-center text-light grow">
                <i className='large material-icons card-img-top'>ac_unit</i>
                    <div className="card-body">
                        <h5 className="card-title d-none d-block">A Chill Breeze in Summer</h5>
                        <p className="card-text d-none d-md-block">Take your knowledge of DnD and put it to use quickly and efficiently!</p>
                    </div>
                </div>
            </div>
            <a href="/newcharacter">
            <button id='build1' className='btn btn-bg-dark btn-large btn-outline-light grow'>Start Building!</button>
            </a>
        </div>
    );
}

export default Parallax1;