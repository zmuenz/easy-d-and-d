import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Button
} from 'reactstrap';
import API from '../../../utils/API';
import characterCard from '../../characterComponents/characterCard';
import addCharacter from '../../characterComponents/addCharacter';

class Parallax3 extends Component { 
    render() {
        return (
            <div id='parallax3' style={{ height: '500px' }}>
                <div className="parallax"></div>
                <h1 className='text-white text-center' style={{ marginTop: '30px' }}></h1>
                <div id="landingCards" style={{ display: 'flex', alignItems: 'space-around', flexFlow: 'row wrap' }}>
                <characterCard></characterCard>
                <addCharacter></addCharacter>
            </div>
        </div>
        );
    };
}

export default Parallax3;