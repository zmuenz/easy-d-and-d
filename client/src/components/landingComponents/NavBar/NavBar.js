import React from 'react';
import 'tachyons';

const NavBar = () => {
    return (
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 pa0 ma0' style={{ overflow: 'hidden', padding: '0px' }}>
            <nav className="navbar text-dark pa0 ma0 fixed-top shadow-none">
                <a className="navbar-brand" href="/">
                    <img className='App-logo' src="https://i.warosu.org/data/tg/img/0573/12/1515432486162.png" width="45" height="45" alt="" />
                </a>
                <h2 className='text-center text-white'>EZ RPG</h2>
                <ul id="dropdown1" className="dropdown-content">
                    <li><a id="logIn" data-toggle='modal' data-target='#loginModal' href="modal">Log in</a></li>
                    <li><a id="logOut" data-toggle='modal' data-target='#logoutModal' href="modal">Log Out</a></li>
                    <li><a id="signUp" data-toggle='modal' data-target="#signUpModal" href="modal">Sign up</a></li>
                    <li><a href="/dashboard">See your characters</a></li>
                    <li className="divider"></li>
                    <li><a id="startBuild" href="/newcharacter">Begin your build</a></li>
                </ul>
                <li id="menu">
                    <a className="dropdown-trigger" style={{ width: '75px' }} data-target="dropdown1" href="#!" role="button" aria-haspopup="true" aria-expanded="false">Menu<i id="menuIcon" className="material-icons right">arrow_drop_down</i>
                    </a>
                </li>
            </nav>
        </div>
    )
}

export default NavBar;



