import React from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import API from "../../utils/API";


class CharacterPage extends React.Component {
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
      <Container className="my-4">
        {!this.state.characters.length ? (
          <h1 className="text-center">Create characters to see them here!</h1>
        ) : (
            <ListGroup>
              {this.state.characters.map(character => {
                return (
                  <div>
                  <ListGroupItem>Character Name: {character.character_name}</ListGroupItem>
                  <ListGroupItem>Gender: {character.gender}</ListGroupItem>
                  <ListGroupItem>Race: {character.race}</ListGroupItem>
                  <ListGroupItem>Class: {character.class}</ListGroupItem>
                  <ListGroupItem>Dex: {character.dex}</ListGroupItem>
                  <ListGroupItem>Intelligence: {character.intel}</ListGroupItem>
                  <ListGroupItem>Charisma: {character.cha}</ListGroupItem>
                  <ListGroupItem>Strength: {character.stre}</ListGroupItem>
                  <ListGroupItem>Constitution: {character.con}</ListGroupItem>
                  <ListGroupItem>Wisdom: {character.wis}</ListGroupItem>
                  <ListGroupItem>Acrobatics: {character.acrobatics}</ListGroupItem>
                  <ListGroupItem>Animal Handling: {character.animal_handling}</ListGroupItem>
                  <ListGroupItem>Arcana: {character.arcana}</ListGroupItem>
                  <ListGroupItem>Athletics: {character.athletics}</ListGroupItem>
                  <ListGroupItem>Deception: {character.deception}</ListGroupItem>
                  <ListGroupItem>History: {character.history}</ListGroupItem>
                  <ListGroupItem>Insight: {character.insight}</ListGroupItem>
                  <ListGroupItem>Intimidation: {character.intimidation}</ListGroupItem>
                  <ListGroupItem>Investigation: {character.investigation}</ListGroupItem>
                  <ListGroupItem>Medicine: {character.medicine}</ListGroupItem>
                  <ListGroupItem>Nature: {character.nature}</ListGroupItem>
                  <ListGroupItem>Perception: {character.perception}</ListGroupItem>
                  <ListGroupItem>Performance: {character.performance}</ListGroupItem>
                  <ListGroupItem>Persuasion: {character.persuasion}</ListGroupItem>
                  <ListGroupItem>Religion: {character.religion}</ListGroupItem>
                  <ListGroupItem>Sleight of Hand: {character.sleight}</ListGroupItem>
                  <ListGroupItem>Stealth: {character.stealth}</ListGroupItem>
                  <ListGroupItem>Survival: {character.survival}</ListGroupItem>
                  </div>
                );
              })};
            </ListGroup>
          )}
      </Container>
    );
  }
};


export default CharacterPage;
