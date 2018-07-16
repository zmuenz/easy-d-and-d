import React, { Component } from 'react';
import Jumbo1 from '../../components/landingComponents/Jumbotron1';
import NavBar from '../../components/landingComponents/NavBar';
import Parallax1 from '../../components/landingComponents/Parallax1';
import Parallax2 from '../../components/landingComponents/Parallax2';
import Info from '../../components/landingComponents/Info';
import Jumbo2 from '../../components/landingComponents/Jumbotron2';
import SignUp from '../../components/landingComponents/SignUp';
import Login from '../../components/landingComponents/Login';
import Logout from '../../components/landingComponents/Logout';
import Footer from '../../components/landingComponents/Footer/Footer';
import '../../App.css';
import 'tachyons';

class Landing extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  };

  render() {
    return (
      <div className="App">
        <SignUp storeUser={this.props.storeUser} />
        <Login storeUser={this.props.storeUser} />/>
        <Logout />
        <NavBar />
        <Jumbo1 />
        <Parallax1 />
        <Info />
        <Parallax2 />
        <Jumbo2 />
        <Footer />
      </div>
    );
  }
}

export default Landing;