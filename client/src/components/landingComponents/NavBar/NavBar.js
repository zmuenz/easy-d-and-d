import React from 'react';
import 'tachyons';

const NavBar = () => {
    return (
        <div className='col-sm-12 col-md-12 col-lg-12 col-xl-12 pa0 ma0' style={{overflow: 'hidden', padding: '0px'}}>
            <nav className="navbar text-dark pa0 ma0 fixed-top shadow-none">
                <a className="navbar-brand" href="index.html">
                    <img src="https://i.warosu.org/data/tg/img/0573/12/1515432486162.png" width="45" height="45" alt="" />
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <button className="nav-link dropdown-toggle btn btn-outline-light text-light" style={{width: '75px'}} href="#" id="navbarDropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Menu
                        </button>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a id="logIn" data-toggle='modal' data-target='#loginModal' className="dropdown-item" href="modal">Log In</a>
                            <a id="signUp" data-toggle='modal' data-target="#signUpModal" className="dropdown-item" href="modal">Sign Up</a>
                            <div className="dropdown-divider"></div>
                            <a id="startBuild" className="dropdown-item" href="modal">Start Creating</a>
                        </div>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;