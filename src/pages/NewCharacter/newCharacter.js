import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import API from '../../utils/API';
import {
    Container,
    Row,
    Col,
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

export class NewCharacter extends Component {
    state: {
        username: "",
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

    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    randomizeGender = event => {
        event.preventDefault();
        const genders = ["Female", "Male"];
        var charGender = genders[Math.floor(Math.random() * genders.length)];
        document.getElementById("gender").value = charGender;
    };

    randomizeRace = event => {
        event.preventDefault();
        const races = ["Dwarf", "Elf", "Gnome", "Half-elf", "Half-orc", "Halfling", "Human"];
        let charRace = races[Math.floor(Math.random() * races.length)];
        document.getElementById("race").value = charRace;
    };

    randomizeClass = event => {
        event.preventDefault();
        const classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"];
        var charClass = classes[Math.floor(Math.random() * classes.length)];
        document.getElementById("class").value = charClass;
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
                    <Form className="mt-5">
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="character_name">Character Name</Label>
                                    <Input type="text" name="character_name" id="character_name" onChange={this.handleInputChange} placeholder="Name your character" />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="gender">Gender</Label>
                                    <Input type="select" name="gender" id="gender" onChange={this.handleInputChange} placeholder="Select character gender">
                                        <option value="" selected disabled>Please select a gender</option>
                                        <option>Female</option>
                                        <option>Male</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button className="mt-4" onClick={this.randomizeGender} color="info">Random Gender</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="race">Race</Label>
                                    <Input type="select" name="race" id="race" onChange={this.handleInputChange} placeholder="Choose your character's race">
                                        <option value="" selected disabled>Please select a race</option>
                                        <option>Dwarf</option>
                                        <option>Elf</option>
                                        <option>Gnome</option>
                                        <option>Half-elf</option>
                                        <option>Half-orc</option>
                                        <option>Halfling</option>
                                        <option>Human</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button className="mt-4" onClick={this.randomizeRace} color="info">Random Race</Button>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label for="class">Class</Label>
                                    <Input type="select" name="class" id="class" onChange={this.handleInputChange} placeholder="Choose your character's class">
                                        <option value="" selected disabled>Please select a class</option>
                                        <option>Barbarian</option>
                                        <option>Bard</option>
                                        <option>Cleric</option>
                                        <option>Druid</option>
                                        <option>Fighter</option>
                                        <option>Monk</option>
                                        <option>Paladin</option>
                                        <option>Ranger</option>
                                        <option>Rogue</option>
                                        <option>Sorcerer</option>
                                        <option>Wizard</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button className="mt-4" onClick={this.randomizeClass} color="info">Random Class</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button color="info" type="submit" onClick={this.handleFormSubmit}>Sign up!</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
}

