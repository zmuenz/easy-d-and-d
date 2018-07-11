import React from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import NavBar from '../../components/landingComponents/NavBar';
import CharJumbo from '../../components/characterComponents/charJumbo';
import CharPar1 from '../../components/characterComponents/CharPar1';
import API from "../../utils/API";


export class CharacterPage extends React.Component {
  state = {
    characters: [],
  };

  componentDidMount() {
    let userName = JSON.parse((sessionStorage.getItem('userName')));
    this.loadCharacters();
  }

  loadCharacters = (userName) => {
    API.getCharacters()
      .then(res =>
        this.setState({ characters: res.data })
      )
      .catch(err => console.log(err));
  };

  //   render() {
  //     return (
  //       <Container className="my-4">
  //         {!this.state.characters.length ? (
  //           <h1 className="text-center">Create characters to see them here!</h1>
  //         ) : (
  //             <ListGroup>
  //               {this.state.characters.map(character => {
  //                 return (
  //                   <div>
  //                   <ListGroupItem>Character Name: {character.character_name}</ListGroupItem>
  //                   <ListGroupItem>Gender: {character.gender}</ListGroupItem>
  //                   <ListGroupItem>Race: {character.race}</ListGroupItem>
  //                   <ListGroupItem>Class: {character.class}</ListGroupItem>
  //                   <ListGroupItem>Dex: {character.dex}</ListGroupItem>
  //                   <ListGroupItem>Intelligence: {character.intel}</ListGroupItem>
  //                   <ListGroupItem>Charisma: {character.cha}</ListGroupItem>
  //                   <ListGroupItem>Strength: {character.stre}</ListGroupItem>
  //                   <ListGroupItem>Constitution: {character.con}</ListGroupItem>
  //                   <ListGroupItem>Wisdom: {character.wis}</ListGroupItem>
  //                   </div>
  //                 );
  //               })};
  //             </ListGroup>
  //           )}
  //       </Container>
  //     );
  //   }
  render() {
    return (
      <div>
        <NavBar />
        <CharJumbo />
        <CharPar1 />
      </div>
    );
  }
};



