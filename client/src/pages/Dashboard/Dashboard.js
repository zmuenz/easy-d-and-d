import React, { Component } from 'react';
import Parallax3 from '../../components/landingComponents/Parallax3';
import NavBar from '../../components/landingComponents/NavBar';
import SignUp from '../../components/landingComponents/SignUp';
import Login from '../../components/landingComponents/Login';
import Logout from '../../components/landingComponents/Logout';
import Footer from '../../components/landingComponents/Footer/Footer';
import '../../App.css';
import 'tachyons';

export class Dashboard extends React.Component {
    render() {
        let userName =  JSON.parse((sessionStorage.getItem('userName')))
        let firstName =  JSON.parse((sessionStorage.getItem('firstName')))
        let lastName =  JSON.parse((sessionStorage.getItem('lastName')))
        let id =  JSON.parse((sessionStorage.getItem('id')))
        let email =  JSON.parse((sessionStorage.getItem('email')))

        return (
            <div className="App">
                <NavBar />
                <SignUp storeUser={this.props.storeUser} />
                <Login storeUser={this.props.storeUser} />/>
                <Logout />
                <div id='jumbo3' className='jumbotron bg-dark text-white tc mb-0'>
                    <h1 className='f1'>Dive Back In, {firstName}!</h1>
                    <p className='f3'>The Game Missed You</p>
                </div>
                <Parallax3 />
                <Footer />
            </div>
        );
    }
}

export default Dashboard;