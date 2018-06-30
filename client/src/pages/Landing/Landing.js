import React, { Component } from 'react';
import Jumbo1 from '../../components/Jumbotron1';
import NavBar from '../../components/NavBar';
import Parallax1 from '../../components/Parallax1';
import Parallax2 from '../../components/Parallax2';
import Info from '../../components/Info';
import Jumbo2 from '../../components/Jumbotron2';
import '../../App.css';
import 'tachyons';

class Landing extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Jumbo1 />
        <Parallax1 />
        <Info />
        <Parallax2 />
        <Jumbo2 />
      </div>
    );
  }
}

export default Landing;