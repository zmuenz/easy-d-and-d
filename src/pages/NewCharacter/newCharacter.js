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
    FormText,
    Card,
    CardTitle,
    CardText
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

    randomizeStats = event => {
        event.preventDefault();
        let charStats = [];

        let stats = {
            str: 0,
            dex: 0,
            con: 0,
            int: 0,
            wis: 0,
            cha: 0
        };

        function bubbleSort(items) {
            var length = items.length;
            for (var i = (length - 1); i >= 0; i--) {
                //Number of passes
                for (var j = (length - i); j > 0; j--) {
                    //Compare the adjacent positions
                    if (items[j] < items[j - 1]) {
                        //Swap the numbers
                        var tmp = items[j];
                        items[j] = items[j - 1];
                        items[j - 1] = tmp;
                    }
                }
            }
            return items;
        };

        function statRolls() {
            let diceRolls = [];

            for (var i = 0; i < 4; i++) {
                let currentRoll = Math.floor((Math.random() * 6) + 1);
                diceRolls.push(currentRoll);
                console.log(currentRoll);
            };

            bubbleSort(diceRolls);
            diceRolls.shift();
            var sum = diceRolls.reduce(function (a, b) { return a + b; }, 0);
            charStats.push(sum);
        };

        function setStats() {
            stats.str = charStats[0];
            stats.dex = charStats[1];
            stats.con = charStats[2];
            stats.int = charStats[3];
            stats.wis = charStats[4];
            stats.cha = charStats[5];
        }

        function rollStats() {
            for (var x = 0; x < 6; x++) {
                statRolls();
            };
            setStats();
        };

        rollStats();
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
                                    <Input type="select" name="gender" id="gender" value="" onChange={this.handleInputChange}>
                                        <option value="">Select character's gender</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
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
                                    <Input type="select" name="race" id="race" value="" onChange={this.handleInputChange}>
                                        <option value="">Select character's race</option>
                                        <option value="Dwarf">Dwarf</option>
                                        <option value="Elf">Elf</option>
                                        <option value="Gnome">Gnome</option>
                                        <option value="Half-elf">Half-elf</option>
                                        <option value="Half-orc">Half-orc</option>
                                        <option value="Halfling">Halfling</option>
                                        <option value="Human">Human</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button className="mt-4" onClick={this.randomizeRace} color="info">Random Race</Button>
                            </Col>

                            <Col>
                                <FormGroup>
                                    <Label for="class">Class</Label>
                                    <Input type="select" name="class" id="class" value="" onChange={this.handleInputChange}>
                                        <option value="">Select character's class</option>
                                        <option value="Barbarian">Barbarian</option>
                                        <option value="Bard">Bard</option>
                                        <option value="Cleric">Cleric</option>
                                        <option value="Druid">Druid</option>
                                        <option value="Fighter">Fighter</option>
                                        <option value="Monk">Monk</option>
                                        <option value="Paladin">Paladin</option>
                                        <option value="Ranger">Ranger</option>
                                        <option value="Rogue">Rogue</option>
                                        <option value="Sorcerer">Sorcerer</option>
                                        <option value="Wizard">Wizard</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col>
                                <Button className="mt-4" onClick={this.randomizeClass} color="info">Random Class</Button>
                            </Col>
                        </Row>
                        <Row>

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

