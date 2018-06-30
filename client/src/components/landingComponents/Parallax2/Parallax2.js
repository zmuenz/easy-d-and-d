import React from 'react';
import 'tachyons';

const Parallax2 = () => {
    return (
        <div id='parallax1' className="parallax-container" style={{ height: '500px' }}>
            <div className="parallax"><img id='dice' src="https://geekandsundry.com/wp-content/uploads/2016/12/featured-dnd-holiday.png" alt='dnd d20 over character sheet' /></div>
            <h1 className='text-white' style={{marginTop: '30px'}}>Roll the dice and play!</h1>
            <div id="landingCards" style={{ display: 'flex', alignItems: 'space-around', flexFlow: 'row wrap' }}>
                <div id='card2-1' className="card col-sm-12 col-md-3 text-center text-light grow">
                    <i className='large material-icons card-img-top'>casino</i>
                    <div className="card-body">
                        <h5 className="card-title">Randomize</h5>
                        <p className="card-text">For players who are willing to play anything. Random class, race, gender, and stats. Put your skills to the test!</p>
                    </div>
                </div>
                <div id='card2-2' className="card col-sm-12 col-md-3 text-center text-light grow">
                <i className='large material-icons card-img-top'>loop</i>
                    <div className="card-body">
                        <h5 className="card-title">Mix & Match</h5>
                        <p className="card-text">Have an idea of what you want, but not the whole character? Choose your class or race, then let the randomizer fill in the rest!</p>
                    </div>
                </div>
                <div id='card2-3' className="card col-sm-12 col-md-3 text-center text-light grow">
                <i className='large material-icons card-img-top'>whatshot</i>
                    <div className="card-body">
                        <h5 className="card-title">Create</h5>
                        <p className="card-text">Add your skills & spells, then get ready to begin playing! The easiest character creation experience ever!</p>
                    </div>
                </div>
            </div>
            <button id='build2' className='btn btn-bg-dark btn-large btn-outline-light grow'>Start Building!</button>
        </div>
    );
}

export default Parallax2;