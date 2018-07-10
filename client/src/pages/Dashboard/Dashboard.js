import React, { Component } from 'react';
import Jumbo1 from '../../components/landingComponents/Jumbotron1';
import API from '../../utils/API';
import NavBar from '../../components/landingComponents/NavBar';
import SignUp from '../../components/landingComponents/SignUp';
import Login from '../../components/landingComponents/Login';
import Parallax3 from '../../components/landingComponents/Parallax3';
import '../../App.css';
import 'tachyons';

// let user = JSON.parse(sessionStorage.getItem('user'))
// let userName = user.userName;
// let userid = user.id;
// let firstName = user.firstName;
// let lastName = user.lastName;
// let email = user.email;

export class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          firstName: "",
          lastName: "",
          userName: "",
          email : "",
          userName : "",
          id : ""
        }
      };
    render(){
        return (
            <div>
                <NavBar />
                <div id='jumbo3' className='jumbotron bg-dark text-white tc mb-0'>
                    {/* <h1 className='f1'>Dive Back In, {userName} !</h1> */}
                    <p className='f3'>The game missed you</p>
                </div>
                <Parallax3 />
            </div>
        );
    }
}

export default Dashboard;