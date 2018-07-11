import React from 'react';
import 'tachyons';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import API from '../utils/API';
import '../images/characters.json'



export class CharCard extends React.Component {
    state = {
        characters: [],
    };

    componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = () => {
        API.getCharacters()
            .then(res =>
                this.setState({ characters: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Card>
                <CardImg src='../images/characters.json' alt="Card image cap" />
                <CardBody>

                    <CardTitle>Name: {character.character_name}</CardTitle>
                    <CardSubtitle>Gender:{character.gender}</CardSubtitle>
                    <CardSubtitle>Race:{character.race}</CardSubtitle>
                    <CardSubtitle>Class:{character.class}</CardSubtitle>
                    <CardText>
                        <ListGroup><ListGroupItem>Dexterity: {character.dex}</ListGroupItem>
                            <ListGroupItem>Intelligence: {character.intel}</ListGroupItem>
                            <ListGroupItem>Charisma: {character.cha}</ListGroupItem>
                            <ListGroupItem>Strength: {character.stre}</ListGroupItem>
                            <ListGroupItem>Constitution: {character.con}</ListGroupItem>
                            <ListGroupItem>Wisdom: {character.wis}</ListGroupItem> </ListGroup>
                    </CardText>


                </CardBody>
            </Card>
        );
    }
}
export default CharCard;