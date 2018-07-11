import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Button
} from 'reactstrap';
import API from '../../../utils/API';
import CpButton from '../CpButton/CpButton';
import DeleteButton from '../DeleteButton/DeleteButton';

class CharacterCard extends Component {
    state = {
        characters: [],
      }

    componentDidMount() {
        let userName =  JSON.parse((sessionStorage.getItem('userName')))
        this.loadCharacters();
        console.log(this.state.characters)
    }

      loadCharacters = (userName) => {
        API.getCharacters()
          .then(res =>
            this.setState({ characters: res.data })
          )
          .catch(err => console.log(err));
      };

    render() { 
    return(
    <div className="card col-sm-12 col-md-3 grow">
        <div className="card-body" id="card1">
            <Card>
                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                <CardBody>
                    <CardTitle>Character Name</CardTitle>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <CpButton>Profile</CpButton> 
                    <DeleteButton>Delete Character</DeleteButton>
                </CardBody>
                </Card>
        </div>
    </div>

    )
    }
}

export default CharacterCard;