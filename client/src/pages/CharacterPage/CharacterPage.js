import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container } from 'reactstrap';
import NavBar from '../../components/landingComponents/NavBar';
import CharJumbo from '../../components/characterComponents/charJumbo';
import CharPar1 from '../../components/characterComponents/CharPar1';



export class CharacterPage extends Component {

 
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



