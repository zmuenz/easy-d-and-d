import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Button
} from 'reactstrap';
import API from '../../../utils/API';
import CharacterCard from '../../characterComponents/CharacterCard';
import AddCharacter from '../../characterComponents/AddCharacter';

class Parallax3 extends Component {
    state = {
        characters: [],
    }

    componentDidMount() {
        let userName = JSON.parse((sessionStorage.getItem('userName')))
        this.loadCharacters();
    }

    loadCharacters = (userName) => {
        API.getCharacters()
            .then(res =>
                this.setState({ characters: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div id='parallax3' style={{ height: '500px' }}>
                <div id="landingCards" style={{ display: 'flex', alignItems: 'space-around', flexFlow: 'row wrap' }}>
                    <CharacterCard />
                    <AddCharacter />
                </div>
            </div>
        );
    };
}
