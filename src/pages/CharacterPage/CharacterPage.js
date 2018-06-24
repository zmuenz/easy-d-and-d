import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../../utils/API';
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText
} from 'reactstrap';

export class CharacterPage extends React.Component {
    state: {
        username: ,
        character_name: "",
        gender: "",
        race: "",
        class: "",
        str: 0,
        dex: 0,
        con: 0,
        int: 0,
        wis: 0,
        cha: 0,
        acrobatics: "",
        animal_handling: "",
        arcana: "",
        athletics: "",
        deception: "",
        history: "",
        insight: "",
        intimidation: "",
        investigation: "",
        medicine: "",
        nature: "",
        perception: "",
        performance: "",
        persuasion: "",
        religion: "",
        sleight: "",
        stealth: "",
        survival: ""
    };



    handleFormSubmit = event => {
        event.preventDefault();
        API.saveCharacter(this.state)
            .then(res => {
                if (res.data.status === "error") {
                    throw new Error(res.data.message);
                }
                this.setState({ results: res.data.message, error: "" });
            })
            .catch(err => this.setState({ error: err.message }));
    };

    render() {
        return (
            <div>
                <Container>
                    <Form>
                        <FormGroup>
                            <Label for="userName">Username</Label>
                            <Input type="name" name="userName" id="userName" placeholder="Create a UserName" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="email">Email</Label>
                            <Input type="email" name="email" id="email" placeholder="Enter your email address" />
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input type="password" name="password" id="password" placeholder="Create a secure password" />
                        </FormGroup>
                        <Button color="info" type="submit">Sign up!</Button>
                    </Form>
                </Container>
            </div>
        );
    }
}

