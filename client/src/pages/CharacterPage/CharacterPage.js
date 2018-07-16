import React, {Component} from 'react';
import NavBar from '../../components/landingComponents/NavBar';
import CharJumbo from '../../components/characterComponents/charJumbo';
import CharPar1 from '../../components/characterComponents/CharPar1';
import Footer from '../../components/landingComponents/Footer/Footer';
import SkillList from '../../components/characterComponents/SkillList/SkillList';



export class CharacterPage extends Component {

 
  
  render() {
    return (
      <div>
        <NavBar />
        <CharJumbo />
        <CharPar1 />
        <Footer />
      </div>
    );
  }
};


