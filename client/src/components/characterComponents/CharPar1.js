import React from 'react';
import 'tachyons';
import './CharPar1.css';


const CharPar1 = () => {
    return (
        <div>
            <div id='parallax1' className="parallax-container charInfo" style={{ height: '500px' }}>
                <div className="parallax"><img id='dice' src="https://stmed.net/sites/default/files/library-wallpapers-28681-1755646.jpg" alt='dnd d20 over character sheet' /></div>
                <div id="charIntro" className="container">
                    <div id='imageHolder' className='col-12 col-sm-12 col-md-3'>
                        <img id="charImage" src="https://i.pinimg.com/originals/62/5e/ec/625eece31193b0a58529bf9c8cd2b5b9.jpg" />
                    </div>
                    <div id="charBasic" className='col-12 col-sm-12 col-md-6 valign-wrapper right'>
                        <h1>(Character Name){'\n'}{'\n'}</h1>
                        <h3>(Alignment) (Race){'\n'}</h3>
                        <h3>(Level) (Class)</h3>
                    </div>
                </div>
            </div>
            <div id="charStat">
                <div id='abilityCard' className="card col-sm-12 col-md-3">
                    <div className="card-body">
                        <h1>Ability Scores</h1>
                        <div id="abilityScores">
                            <h1>STR: 10</h1>
                            <h1>INT: 10</h1>
                            <h1>DEX: 10</h1>
                            <h1>WIS: 10</h1>
                            <h1>CON: 10</h1>
                            <h1>CHA: 10</h1>
                        </div>
                    </div>
                </div>
                <div id="skillList" className='col-sm-12 col-md-8 text-truncate'>
                    <div>
                        <table className='text-center'>
                            <tr>
                                <th>Skill Name</th>
                                <th>Class Skill</th>
                                <th>AS Bonus</th>
                                <th>Ranks</th>
                                <th>Feats</th>
                                <th>Misc</th>
                                <th>AC Penalty</th>
                            </tr>
                            <tr>
                                <td>Acrobatics</td>
                                <td>
                                    Yes
                                </td>
                                <td>SB</td>
                                <td>AS SB</td>
                                <td>
                                    <input type='number'></input>
                                </td>
                                <td>Feats</td>
                                <td>Misc</td>
                                <td>
                                    <input id='ACP' type='number'></input>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CharPar1;
