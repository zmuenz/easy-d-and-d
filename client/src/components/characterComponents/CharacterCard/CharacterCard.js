import React, { Component } from 'react';
import 'tachyons';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import API from '../../../utils/API';
import CpButton from '../CpButton/CpButton';
import DeleteButton from '../DeleteButton/DeleteButton';

class CharacterCard extends React.Component {
    state = {
        characters: [],
    };

    componentDidMount = () => {
        let userName = JSON.parse((sessionStorage.getItem('userName')));
        this.loadCharacters();
    };

    loadCharacters = () => {
        API.getAllCharacters()
            .then(res =>
                this.setState({ characters: res.data })
            )
            .catch(err => console.log(err));
    };


    render = () => {
        console.log(this.state.characters)
        let cardList = []
        Object.keys(this.state.characters).forEach((cardIndex) => {
            let card = this.state.characters[cardIndex]
            cardList.push(
                <div className="card-body" id="card1">
                    <Card>
                        <CardBody>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardTitle>{card.character_name}</CardTitle>
                            <CardSubtitle>{card.race} | {card.class}</CardSubtitle>
                            <CardText>{card.alignment} | {card.gender}</CardText>
                            <CpButton>Profile</CpButton>
                            <DeleteButton>Delete Character</DeleteButton>
                        </CardBody>
                    </Card>
                </div>
            )
        })
        return(
            <div className="card col-sm-12 col-md-3 grow">
            {cardList}
        </div>
        )
    }
}

export default CharacterCard;