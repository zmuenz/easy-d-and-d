import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import CharCard from './landingComponents';
import API from '../../../utils/API';

const Parallax3 = () => {
    return (
        <div id='parallax3' style={{ height: '500px' }}>
            <h1 className='text-white text-center' style={{ marginTop: '30px' }}>DASHBOARD</h1>
            <div id="landingCards" style={{ display: 'flex', alignItems: 'space-around', flexFlow: 'row wrap' }}>
                <div id='card1' className="card col-sm-12 col-md-3 grow">

                    <div className="card-body">
                        <CharCard></CharCard>                       
                    </div>
                </div>
                <div id='card2' className="card col-sm-12 col-md-3 grow">

                    <div className="card-body">
                        <CharCard></CharCard>                      
                    </div>
                </div>
                <div id='card3' className="card col-sm-12 col-md-3 grow">
                    <div className="card-body">
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                            <CardBody>
                                <CardTitle>Character Name</CardTitle>
                                <CardSubtitle>Card subtitle</CardSubtitle>
                                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                <Button>Profile</Button> <Button>Delete Character</Button>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Parallax3;