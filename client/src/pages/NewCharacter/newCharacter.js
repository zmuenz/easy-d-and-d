import React, { Component } from 'react';
import Jumbo1 from '../../components/landingComponents/Jumbotron1';
import NavBar from '../../components/landingComponents/NavBar';
import Parallax1 from '../../components/landingComponents/Parallax1';
import Parallax2 from '../../components/landingComponents/Parallax2';
import Info from '../../components/landingComponents/Info';
import Jumbo2 from '../../components/landingComponents/Jumbotron2';
import SignUp from '../../components/landingComponents/SignUp';
import Login from '../../components/landingComponents/Login';
import Logout from '../../components/landingComponents/Logout';
import '../../App.css';
import 'tachyons';
import API from '../../utils/API';


import './NewCharacter.css';
import {
    Container,
    Jumbotron,
    Row,
    Col,
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    Card,
    CardHeader,
    CardText
} from 'reactstrap';


export class NewCharacter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            character_name: "",
            gender: "",
            alignment: "",
            race: "",
            class: "",
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10,
            baseBonus: {}
        };
    };

    // If race is half-elf, half-orc, or human, this function finds and applies the random +2 bonus to a stat
    findRandomBonus() {
        if ('str' in this.state.baseBonus) {
            this.setState({
                str: this.state.str + 2
            })
        } else if ('dex' in this.state.baseBonus) {
            this.setState({
                dex: this.state.dex + 2
            })
        } else if ('con' in this.state.baseBonus) {
            this.setState({
                con: this.state.con + 2
            })
        } else if ('int' in this.state.baseBonus) {
            this.setState({
                int: this.state.int + 2
            })
        } else if ('wis' in this.state.baseBonus) {
            this.setState({
                wis: this.state.wis + 2
            })
        } else if ('cha' in this.state.baseBonus) {
            this.setState({
                cha: this.state.cha + 2
            })
        };
    };

    // Defining function that sets stat bonuses based on selected race
    applyRacialBonuses() {

        switch (document.getElementById('race').value) {

            case "":
                break;

            case "Dwarf":
                this.setState({
                    con: this.state.con + 2,
                    wis: this.state.wis + 2,
                    cha: this.state.cha - 2,
                    baseBonus: {
                        con: 2,
                        wis: 2,
                        cha: -2
                    }
                });
                break;

            case "Elf":
                this.setState({
                    dex: this.state.dex + 2,
                    int: this.state.int + 2,
                    con: this.state.con - 2,
                    baseBonus: {
                        dex: 2,
                        int: 2,
                        con: -2
                    }
                });
                break;

            case "Gnome":
                this.setState({
                    con: this.state.con + 2,
                    cha: this.state.cha + 2,
                    str: this.state.str - 2,
                    baseBonus: {
                        con: 2,
                        cha: 2,
                        str: -2
                    }
                });
                break;

            case "Half-elf":
                var statsArray = ["str", "dex", "con", "int", "wis", "cha"];
                const randStat = statsArray[Math.floor(Math.random() * statsArray.length)];
                var key = randStat;
                var val = 2;
                var obj = {};
                obj[key] = val;

                this.setState({
                    baseBonus: Object.assign({}, obj)
                }, () => {
                    this.findRandomBonus();
                });

                break;

            case "Half-orc":
                var statsArray1 = ["str", "dex", "con", "int", "wis", "cha"];
                const randStat1 = statsArray1[Math.floor(Math.random() * statsArray1.length)];
                var key1 = randStat1;
                var val1 = 2;
                var obj1 = {};
                obj1[key1] = val1;

                this.setState({
                    baseBonus: Object.assign({}, obj1)
                }, () => {
                    this.findRandomBonus();
                });

                break;

            case "Halfling":
                this.setState({
                    dex: this.state.dex + 2,
                    cha: this.state.cha + 2,
                    str: this.state.str - 2,
                    baseBonus: {
                        dex: 2,
                        cha: 2,
                        str: -2
                    }
                });
                break;

            case "Human":
                var statsArray2 = ["str", "dex", "con", "int", "wis", "cha"];
                const randStat2 = statsArray2[Math.floor(Math.random() * statsArray2.length)];
                var key2 = randStat2;
                var val2 = 2;
                var obj2 = {};
                obj2[key2] = val2;

                this.setState({
                    baseBonus: Object.assign({}, obj2)
                }, () => {
                    this.findRandomBonus();
                });

                break;

            default:
                alert("Chosen race not recognized. Please choose from the provided options.");
                this.setState({
                    race: ""
                });
        };
    };

    // Event which handles input change on form
    handleInputChange = event => {
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    // Event that handles any change to the race input
    handleRaceChange = event => {
        switch (this.state.race) {
            case "":
                break;

            case "Dwarf":
                this.setState({
                    con: this.state.con - 2,
                    wis: this.state.wis - 2,
                    cha: this.state.cha + 2,
                    baseBonus: {}
                });
                break;

            case "Elf":
                this.setState({
                    dex: this.state.dex - 2,
                    int: this.state.int - 2,
                    con: this.state.con + 2,
                    baseBonus: {}
                });
                break;

            case "Gnome":
                this.setState({
                    con: this.state.con - 2,
                    cha: this.state.cha - 2,
                    str: this.state.str + 2,
                    baseBonus: {}
                });
                break;

            case "Half-elf":
                if ('str' in this.state.baseBonus) {
                    this.setState({
                        str: this.state.str - 2
                    })
                } else if ('dex' in this.state.baseBonus) {
                    this.setState({
                        dex: this.state.dex - 2
                    })
                } else if ('con' in this.state.baseBonus) {
                    this.setState({
                        con: this.state.con - 2
                    })
                } else if ('int' in this.state.baseBonus) {
                    this.setState({
                        int: this.state.int - 2
                    })
                } else if ('wis' in this.state.baseBonus) {
                    this.setState({
                        wis: this.state.wis - 2
                    })
                } else if ('cha' in this.state.baseBonus) {
                    this.setState({
                        cha: this.state.cha - 2
                    })
                };

                break;

            case "Half-orc":
                if ('str' in this.state.baseBonus) {
                    this.setState({
                        str: this.state.str - 2
                    })
                } else if ('dex' in this.state.baseBonus) {
                    this.setState({
                        dex: this.state.dex - 2
                    })
                } else if ('con' in this.state.baseBonus) {
                    this.setState({
                        con: this.state.con - 2
                    })
                } else if ('int' in this.state.baseBonus) {
                    this.setState({
                        int: this.state.int - 2
                    })
                } else if ('wis' in this.state.baseBonus) {
                    this.setState({
                        wis: this.state.wis - 2
                    })
                } else if ('cha' in this.state.baseBonus) {
                    this.setState({
                        cha: this.state.cha - 2
                    })
                };

                break;

            case "Halfling":
                this.setState({
                    dex: this.state.dex - 2,
                    cha: this.state.cha - 2,
                    str: this.state.str + 2,
                    baseBonus: {}
                });
                break;

            case "Human":
                if ('str' in this.state.baseBonus) {
                    this.setState({
                        str: this.state.str - 2
                    })
                } else if ('dex' in this.state.baseBonus) {
                    this.setState({
                        dex: this.state.dex - 2
                    })
                } else if ('con' in this.state.baseBonus) {
                    this.setState({
                        con: this.state.con - 2
                    })
                } else if ('int' in this.state.baseBonus) {
                    this.setState({
                        int: this.state.int - 2
                    })
                } else if ('wis' in this.state.baseBonus) {
                    this.setState({
                        wis: this.state.wis - 2
                    })
                } else if ('cha' in this.state.baseBonus) {
                    this.setState({
                        cha: this.state.cha - 2
                    })
                };

                break;

            default:
                break;
        };
        // Destructure the name and value properties off of event.target
        // Update the appropriate state
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });

        this.setState({
            baseBonus: {}
        }, () => {
            this.applyRacialBonuses();
            console.log(this.state);
        });

    };

    // OnClick function to randomize character gender
    randomizeGender = event => {
        event.preventDefault();
        const genders = ["Female", "Male"];
        const charGender = genders[Math.floor(Math.random() * genders.length)];
        document.getElementById("gender").value = charGender;

        this.setState({
            gender: charGender
        });
    };

    // Randomizes character alignment on button click
    randomizeAlignment = event => {
        event.preventDefault();
        const alignments = ["Lawful Good", "Neutral Good", "Chaotic Good", "Lawful Neutral", "Neutral", "Chaotic Neutral", "Lawful Evil", "Neutral Evil", "Chaotic Evil"];
        const charAlignment = alignments[Math.floor(Math.random() * alignments.length)];
        document.getElementById("alignment").value = charAlignment;

        this.setState({
            alignment: charAlignment
        });
    };

    // OnClick function to randomize character race, reset stat rolls, and apply racial bonus to stats
    randomizeRace = event => {
        event.preventDefault();
        const races = ["Dwarf", "Elf", "Gnome", "Half-elf", "Half-orc", "Halfling", "Human"];
        const charRace = races[Math.floor(Math.random() * races.length)];
        document.getElementById("race").value = charRace;

        switch (this.state.race) {
            case "":
                break;

            case "Dwarf":
                this.setState({
                    con: this.state.con - 2,
                    wis: this.state.wis - 2,
                    cha: this.state.cha + 2,
                    baseBonus: {}
                });
                break;

            case "Elf":
                this.setState({
                    dex: this.state.dex - 2,
                    int: this.state.int - 2,
                    con: this.state.con + 2,
                    baseBonus: {}
                });
                break;

            case "Gnome":
                this.setState({
                    con: this.state.con - 2,
                    cha: this.state.cha - 2,
                    str: this.state.str + 2,
                    baseBonus: {}
                });
                break;

            case "Half-elf":
                if ('str' in this.state.baseBonus) {
                    this.setState({
                        str: this.state.str - 2
                    })
                } else if ('dex' in this.state.baseBonus) {
                    this.setState({
                        dex: this.state.dex - 2
                    })
                } else if ('con' in this.state.baseBonus) {
                    this.setState({
                        con: this.state.con - 2
                    })
                } else if ('int' in this.state.baseBonus) {
                    this.setState({
                        int: this.state.int - 2
                    })
                } else if ('wis' in this.state.baseBonus) {
                    this.setState({
                        wis: this.state.wis - 2
                    })
                } else if ('cha' in this.state.baseBonus) {
                    this.setState({
                        cha: this.state.cha - 2
                    })
                };

                break;

            case "Half-orc":
                if ('str' in this.state.baseBonus) {
                    this.setState({
                        str: this.state.str - 2
                    })
                } else if ('dex' in this.state.baseBonus) {
                    this.setState({
                        dex: this.state.dex - 2
                    })
                } else if ('con' in this.state.baseBonus) {
                    this.setState({
                        con: this.state.con - 2
                    })
                } else if ('int' in this.state.baseBonus) {
                    this.setState({
                        int: this.state.int - 2
                    })
                } else if ('wis' in this.state.baseBonus) {
                    this.setState({
                        wis: this.state.wis - 2
                    })
                } else if ('cha' in this.state.baseBonus) {
                    this.setState({
                        cha: this.state.cha - 2
                    })
                };

                break;

            case "Halfling":
                this.setState({
                    dex: this.state.dex - 2,
                    cha: this.state.cha - 2,
                    str: this.state.str + 2,
                    baseBonus: {}
                });
                break;

            case "Human":
                if ('str' in this.state.baseBonus) {
                    this.setState({
                        str: this.state.str - 2
                    })
                } else if ('dex' in this.state.baseBonus) {
                    this.setState({
                        dex: this.state.dex - 2
                    })
                } else if ('con' in this.state.baseBonus) {
                    this.setState({
                        con: this.state.con - 2
                    })
                } else if ('int' in this.state.baseBonus) {
                    this.setState({
                        int: this.state.int - 2
                    })
                } else if ('wis' in this.state.baseBonus) {
                    this.setState({
                        wis: this.state.wis - 2
                    })
                } else if ('cha' in this.state.baseBonus) {
                    this.setState({
                        cha: this.state.cha - 2
                    })
                };

                break;

            default:
                break;
        };

        this.setState({
            race: charRace
        }, () => {
            this.applyRacialBonuses();
        });
    };

    // Log state function for testing purposes
    logState = event => {
        event.preventDefault();
        console.log(this.state);
    };

    // OnClick function to randomize character class
    randomizeClass = event => {
        event.preventDefault();
        const classes = ["Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Wizard"];
        const charClass = classes[Math.floor(Math.random() * classes.length)];
        document.getElementById("class").value = charClass;
        this.setState({
            class: charClass
        });
    };

    // onClick function that simulates character stat rolls
    randomizeStats = event => {
        event.preventDefault();
        // Array to store the character stat rolls
        let charStats = [];

        // BubbleSort function to sort the 4 rolls in ascending order
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

        // Rolls 4 numbers from 1-6 and stores them in an array
        function statRolls() {
            let diceRolls = [];

            for (var i = 0; i < 4; i++) {
                let currentRoll = Math.floor((Math.random() * 6) + 1);
                diceRolls.push(currentRoll);
            };

            // Bubble sort the 4 rolls
            bubbleSort(diceRolls);
            // Remove the first item in the array (the lowest roll)
            diceRolls.shift();
            // Add the remaining rolls together
            var sum = diceRolls.reduce(function (a, b) { return a + b; }, 0);
            // Push that final number to the charStats array (we use this to set the stats later)
            charStats.push(sum);
        };

        // Function to set the state to the random stat rolls
        function setStats() {

            this.setState({
                str: charStats[0],
                dex: charStats[1],
                con: charStats[2],
                int: charStats[3],
                wis: charStats[4],
                cha: charStats[5]
            }, () => {
                console.log(charStats);
                console.log(this.state);

                // Function to apply racial bonuses from selected race
                switch (document.getElementById('race').value) {

                    case "":
                        break;

                    case "Dwarf":
                        this.setState({
                            con: this.state.con + 2,
                            wis: this.state.wis + 2,
                            cha: this.state.cha - 2,
                            baseBonus: {
                                con: 2,
                                wis: 2,
                                cha: -2
                            }
                        });
                        break;

                    case "Elf":
                        this.setState({
                            dex: this.state.dex + 2,
                            int: this.state.int + 2,
                            con: this.state.con - 2,
                            baseBonus: {
                                dex: 2,
                                int: 2,
                                con: -2
                            }
                        });
                        break;

                    case "Gnome":
                        this.setState({
                            con: this.state.con + 2,
                            cha: this.state.cha + 2,
                            str: this.state.str - 2,
                            baseBonus: {
                                con: 2,
                                cha: 2,
                                str: -2
                            }
                        });
                        break;

                    case "Half-elf":
                        this.findRandomBonus();
                        break;

                    case "Half-orc":
                        this.findRandomBonus();
                        break;

                    case "Halfling":
                        this.setState({
                            dex: this.state.dex + 2,
                            cha: this.state.cha + 2,
                            str: this.state.str - 2,
                            baseBonus: {
                                dex: 2,
                                cha: 2,
                                str: -2
                            }
                        });
                        break;

                    case "Human":
                        this.findRandomBonus();
                        break;

                    default:
                        break;
                };
            });
        };

        // Function that calls statRolls 6 times (to get the 6 stats we need)
        function rollStats() {
            for (var x = 0; x < 6; x++) {
                statRolls.bind(this)();
            };
        };

        // Call the rollStats function and bind it to .this
        rollStats.bind(this)();
        // Set the state of the stats to the numbers rolled and bind it to .this
        setStats.bind(this)();

    };

    // Resets the state of the character stats
    resetStats = event => {
        event.preventDefault();
        this.setState({
            str: 10,
            dex: 10,
            con: 10,
            int: 10,
            wis: 10,
            cha: 10
        }, () => {
            // Function to apply racial bonuses from selected race
            switch (document.getElementById('race').value) {

                case "":
                    break;

                case "Dwarf":
                    this.setState({
                        con: this.state.con + 2,
                        wis: this.state.wis + 2,
                        cha: this.state.cha - 2,
                        baseBonus: {
                            con: 2,
                            wis: 2,
                            cha: -2
                        }
                    });
                    break;

                case "Elf":
                    this.setState({
                        dex: this.state.dex + 2,
                        int: this.state.int + 2,
                        con: this.state.con - 2,
                        baseBonus: {
                            dex: 2,
                            int: 2,
                            con: -2
                        }
                    });
                    break;

                case "Gnome":
                    this.setState({
                        con: this.state.con + 2,
                        cha: this.state.cha + 2,
                        str: this.state.str - 2,
                        baseBonus: {
                            con: 2,
                            cha: 2,
                            str: -2
                        }
                    });
                    break;

                case "Half-elf":
                    this.findRandomBonus();
                    break;

                case "Half-orc":
                    this.findRandomBonus();
                    break;

                case "Halfling":
                    this.setState({
                        dex: this.state.dex + 2,
                        cha: this.state.cha + 2,
                        str: this.state.str - 2,
                        baseBonus: {
                            dex: 2,
                            cha: 2,
                            str: -2
                        }
                    });
                    break;

                case "Human":
                    this.findRandomBonus();
                    break;

                default:
                    break;
            };
        });
    };

    // Submits the character data saved in this.state to the database
    handleFormSubmit = event => {
        event.preventDefault();

        console.log(this.state);
        API.saveCharacter({
            userName: JSON.parse((sessionStorage.getItem('userName'))),
            userid: JSON.parse((sessionStorage.getItem('id'))),
            character_name: this.state.character_name,
            gender: this.state.gender,
            alignment: this.state.alignment,
            race: this.state.class,
            class: this.state.class,
            dex: this.state.dex,
            intel: this.state.int,
            stre: this.state.str,
            con: this.state.con,
            wis: this.state.wis,
            cha: this.state.cha
        });

        // Function to reset the form fields after submission to the DB    
        function resetForm() {
            document.getElementById("character_name").value = "";
            document.getElementById("gender").value = "";
            document.getElementById("race").value = "";
            document.getElementById("class").value = "";
            document.getElementById("character_name").value = "";
            this.setState({
                username: "",
                character_name: "",
                gender: "",
                alignment: "",
                race: "",
                class: "",
                str: 10,
                dex: 10,
                con: 10,
                int: 10,
                wis: 10,
                cha: 10
            });
        };

        // Calls resetForm and binds it to .this
        resetForm.bind(this)();
    };

    render() {

        var statStyling = {
            fontSize: '30px'
        };

        var submitButtonStyling = {
            backgroundColor: 'rgba(105, 32, 160, 1)',
            fontWeight: '600px'
        };

        var labelStyling = {
            fontSize: '18px',
            color: 'rgba(105, 32, 160, 1)'
        };

        var smallText = {
            fontSize: '12px'
        };

        return (
            <div className='build'>
                <Row>
                    <Col sm="12">
                        <Jumbotron id="newCharJumbo">
                            <h1 className='f1'>Begin your Build</h1>
                            <p className='f3'>Will you customize and create, or leave your character to chance? The choice is yours!</p>
                        </Jumbotron>
                    </Col>
                </Row>
                <Row>
                    <Col sm="12">
                        <div className="parallax-container">
                            <div className="parallax"><img src="https://pm1.narvii.com/6383/15429edc1490fca7ed4ce3dcded18f876088bd32_hq.jpg" alt="mosaic of different DND classes" /></div>
                        </div>
                    </Col>
                </Row>
                <Container id="build">
                    <Form className="mt-5">
                        <Row>
                            <Col sm="12">
                                <FormGroup>
                                    <Label style={labelStyling} for="character_name">Character Name</Label>
                                    <Input type="text" name="character_name" id="character_name" onChange={this.handleInputChange} placeholder="Name your character" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <Label style={labelStyling} for="gender">Gender</Label>
                                    <Input type="select" name="gender" id="gender" defaultValue="" onChange={this.handleInputChange}>
                                        <option value="">Select character's gender</option>
                                        <option value="Female">Female</option>
                                        <option value="Male">Male</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="2">
                                <Button className="mt-4 btn-block" onClick={this.randomizeGender} color="info">Randomize</Button>
                            </Col>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <Label style={labelStyling} for="alignment">Alignment</Label>
                                    <Input type="select" name="alignment" id="alignment" defaultValue="" onChange={this.handleInputChange}>
                                        <option value="">Select character's alignment</option>
                                        <option value="Lawful Good">Lawful Good</option>
                                        <option value="Neutral Good">Neutral Good</option>
                                        <option value="Chaotic Good">Chaotic Good</option>
                                        <option value="Lawful Neutral">Lawful Neutral</option>
                                        <option value="Neutral">Neutral</option>
                                        <option value="Chaotic Neutral">Chaotic Neutral</option>
                                        <option value="Lawful Evil">Lawful Evil</option>
                                        <option value="Neutral Evil">Neutral Evil</option>
                                        <option value="Chaotic Evil">Chaotic Evil</option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col sm="12" md="2">
                                <Button className="mt-4 btn-block" onClick={this.randomizeAlignment} color="info">Randomize</Button>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="4">
                                <FormGroup>
                                    <Label style={labelStyling} for="race">Race <span style={smallText}>(Racial ability modifiers are automatically applied.)</span></Label>
                                    <Input type="select" name="race" id="race" defaultValue="" onChange={this.handleRaceChange}>
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
                            <Col sm="12" md="2">
                                <Button className="mt-4 btn-block" onClick={this.randomizeRace} color="info">Randomize</Button>
                            </Col>

                            <Col sm="12" md="4">
                                <FormGroup>
                                    <Label style={labelStyling} for="class">Class</Label>
                                    <Input type="select" name="class" id="class" defaultValue="" onChange={this.handleInputChange}>
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
                            <Col sm="12" md="2">
                                <Button className="mt-4 btn-block" color="info" onClick={this.randomizeClass}>Randomize</Button>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col md="2" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center d-md-none d-lg-block d-xl-block" tag="h5">Strength</CardHeader>
                                    <CardHeader className="text-center d-none d-md-block d-lg-none" tag="h5">STR</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.str}</CardText>
                                </Card>
                            </Col>
                            <Col md="2" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center" tag="h5">Dexterity</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.dex}</CardText>
                                </Card>
                            </Col>
                            <Col md="2" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center" tag="h5">Constitution</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.con}</CardText>
                                </Card>
                            </Col>
                            <Col md="2" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center" tag="h5">Intelligence</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.int}</CardText>
                                </Card>
                            </Col>
                            <Col md="2" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center" tag="h5">Wisdom</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.wis}</CardText>
                                </Card>
                            </Col>
                            <Col md="2" className="mb-3">
                                <Card>
                                    <CardHeader className="text-center" tag="h5">Charisma</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.cha}</CardText>
                                </Card>
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col sm="12" md="2">
                            </Col>
                            <Col sm="12" md="4">
                                <Button className="btn-block mt-3" color="info" onClick={this.randomizeStats}>Roll Ability Scores</Button>
                            </Col>
                            <Col sm="12" md="4">
                                <Button className="btn-outline-info btn-block mt-3" onClick={this.resetStats}>Reset Ability Scores</Button>
                            </Col>
                            <Col sm="12" md="2">
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col sm="12" md="3">
                            </Col>
                            <Col sm="12" md="6">
                                <Button className="pt-3 pb-5 btn-lg btn-block" style={submitButtonStyling} type="submit" onClick={this.handleFormSubmit}>Save Character</Button>
                            </Col>
                            <Col sm="12" md="3">
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </div>
        );
    }
};