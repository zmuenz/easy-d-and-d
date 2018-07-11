import React, { Component } from 'react';
import 'tachyons';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Button
} from 'reactstrap';
import CharacterCard from '../../characterComponents/CharacterCard';
import AddCharacter from '../../characterComponents/AddCharacter';

class Parallax3 extends Component {
    render() {
        return (
            <div id='parallax3' style={{ height: '100%'}}>
                <div id="dashboardCards">
                    <CharacterCard />
                    <AddCharacter />
                </div>
            </div>
        );
    };
}


export default Parallax3;