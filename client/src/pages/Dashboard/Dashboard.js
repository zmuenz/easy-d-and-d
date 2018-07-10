import React, { Component } from 'react';
import Jumbo1 from '../../components/landingComponents/Jumbotron1';
import API from '../../utils/API';
import Parallax3 from '../../components/landingComponents/Parallax3';
import NavBar from '../../components/landingComponents/NavBar';
import Parallax1 from '../../components/landingComponents/Parallax1';
import Parallax2 from '../../components/landingComponents/Parallax2';
import Info from '../../components/landingComponents/Info';
import Jumbo2 from '../../components/landingComponents/Jumbotron2';
import SignUp from '../../components/landingComponents/SignUp';
import Login from '../../components/landingComponents/Login';
import Logout from '../../components/landingComponents/Logout';
import '../../App.css';
import 'tachyons';


export class Dashboard extends React.Component {
        state = {
          characters: [],
        }


      loadCharacters = () => {
        API.getCharacters()
          .then(res =>
            this.setState({ characters: res.data })
          )
          .catch(err => console.log(err));
      };

    render() {
        let userName =  JSON.parse((sessionStorage.getItem('userName')))
        // let firstName =  JSON.parse((sessionStorage.getItem('firstName')))
        // let lastName =  JSON.parse((sessionStorage.getItem('lastName')))
        // let id =  JSON.parse((sessionStorage.getItem('id')))
        // let email =  JSON.parse((sessionStorage.getItem('email')))
        return (
            <div class name="App">
                <NavBar />
                <SignUp storeUser={this.props.storeUser} />
                <Login storeUser={this.props.storeUser} />/>
                <Logout />

                <div id='jumbo3' className='jumbotron bg-dark text-white tc mb-0'>
                    <h1 className='f1'>Dive Back In, {userName}!</h1>
                    <p className='f3'>The game missed you</p>
                </div>
                <Parallax3 />
            </div>
        );
    }
}

export default Dashboard;