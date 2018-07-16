import React from 'react';
import 'tachyons';

const Footer = () => {
    return (
        <div id='footerRow' className="row">
            <footer id='footer' className="col s12 m12 l12 xl12">
                <p id="footerInfo" className="center-align">
                    <u>EZ RPG</u> &copy; 2018 ALL RIGHTS RESERVED
                </p>
            </footer>
        </div>
    )
}

export default Footer;