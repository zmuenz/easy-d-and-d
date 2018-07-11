import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody, Button
} from 'reactstrap';
import API from '../../../utils/API';
import AddButton from '../AddButton/AddButton';

class AddCharacter extends Component {
    render() { 
        return(
<div id='card1' className="card col-sm-12 col-md-3 grow">
<div className="card-body">
    <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
            <CardTitle>Add a character?</CardTitle>
            <CardSubtitle>Something awesome</CardSubtitle>
            <CardText>Could be in store</CardText>
            <AddButton>Duh I want to add!</AddButton> 
        </CardBody>
    </Card>
</div>
</div>
    )}
}

export default AddCharacter;