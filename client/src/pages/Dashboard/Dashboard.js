import React, { Component } from 'react';
import Jumbo1 from '../../components/landingComponents/Jumbotron1';
import API from '../../utils/API';
import NavBar from '../../components/landingComponents/NavBar';
import SignUp from '../../components/landingComponents/SignUp';
import Login from '../../components/landingComponents/Login';
import Logout from '../../components/landingComponents/Logout';
import Parallax3 from '../../components/landingComponents/Parallax3';
import '../../App.css';
import 'tachyons';


export class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          userName: "",
          email : "",
          userName : "",
          id : "",
          characters: "",
        }
      };

      Authenticate() {
        const user = JSON.parse(sessionStorage.getItem('user'));
        console.log(user.userName, user.userid)
        const userName = user.userName;
        const userid = user.id;
        const firstName = user.firstName;
        const lastName = user.lastName;
        const email = user.email;
        }

      loadCharacters = () => {
        API.getCharacters()
          .then(res =>
            this.setState({ characters: res.data })
          )
          .catch(err => console.log(err));
      };

      createCard = () => {

      }

    render(){
        return (
            <div class name="app">
                <NavBar />
                <SignUp storeUser={this.props.storeUser} />
                <Login storeUser={this.props.storeUser} />/>
                <Logout />
                <div id='jumbo3' className='jumbotron bg-dark text-white tc mb-0'>
                    <h1 className='f1'>Dive Back In, {this.userName} !</h1>
                    <p className='f3'>The game missed you</p>
                </div>
                <Parallax3 />
            </div>
        );
    }
}

export default Dashboard;