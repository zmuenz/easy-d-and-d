import React, { Component } from 'react';
import Jumbo1 from '../../components/landingComponents/Jumbotron1';
import API from '../../utils/API';
import NavBar from '../../components/landingComponents/NavBar';
import SignUp from '../../components/landingComponents/SignUp';
import Login from '../../components/landingComponents/Login';
import Parallax3 from '../../components/landingComponents/Parallax3';
import '../../App.css';
import 'tachyons';

export class Dashboard extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div id='jumbo3' className='jumbotron bg-dark text-white tc mb-0'>
                    <h1 className='f1'>Dive Back In!</h1>
                    <p className='f3'>The Game Missed You</p>
                </div>
                <Parallax3 />
            </div>
        );
    }
}

export default Dashboard;