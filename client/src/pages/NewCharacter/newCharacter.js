import React, { Component } from 'react';
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

// let user = JSON.parse(sessionStorage.getItem('user'))
// let userName = user.userName;
// let userid = user.id;

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
            acrobatics: "",
            appraise: "",
            bluff: "",
            climb: "",
            craft: "",
            diplomacy: "",
            disable_device: "",
            disguise: "",
            escape_artist: "",
            fly: "",
            handle_animal: "",
            heal: "",
            intimidate: "",
            knowledge_arcana: "",
            knowledge_dungeoneering: "",
            knowledge_engineering: "",
            knowledge_geography: "",
            knowledge_history: "",
            knowledge_local: "",
            knowledge_nature: "",
            knowledge_nobility: "",
            knowledge_planes: "",
            knowledge_religion: "",
            linguistics: "",
            perception: "",
            perform: "",
            profession: "",
            sense_motive: "",
            sleight_of_hand: "",
            spellcraft: "",
            stealth: "",
            survival: "",
            swim: "",
            use_magic_device: "",
            skillPoints: 0,
            baseBonus: {}
        };
    };

    calculateSkillPoints() {
        let intModifier = Math.floor((this.state.int - 10) / 2);
        // console.log("intModifier: " + intModifier);

        switch (document.getElementById('class').value) {

            case "":
                break;

            case "Barbarian":
                if ((intModifier + 4) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 4
                    });
                };
                break;

            case "Bard":
                if ((intModifier + 6) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 6
                    });
                };
                break;

            case "Cleric":
                if ((intModifier + 2) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 2
                    });
                };
                break;

            case "Druid":
                if ((intModifier + 4) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 4
                    });
                };
                break;

            case "Fighter":
                if ((intModifier + 2) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 2
                    });
                };
                break;

            case "Monk":
                if ((intModifier + 4) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 4
                    });
                };
                break;

            case "Paladin":
                if ((intModifier + 2) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 2
                    });
                };
                break;

            case "Ranger":
                if ((intModifier + 6) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 6
                    });
                };
                break;

            case "Rogue":
                if ((intModifier + 8) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 8
                    });
                };
                break;

            case "Sorcerer":
                if ((intModifier + 2) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 2
                    });
                };
                break;

            case "Wizard":
                if ((intModifier + 2) < 1) {
                    this.setState({
                        skillPoints: 1
                    });
                } else {
                    this.setState({
                        skillPoints: intModifier + 2
                    });
                };
                break;

            default:
                alert("Chosen class not recognized. Please choose from the provided options.");
                this.setState({
                    skillPoints: 0
                });
                break;
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

    handleClassChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });

        this.setState({
            skillPoints: 0
        }, () => {
            this.calculateSkillPoints.bind(this)();
            console.log("Calculated skill points: " + this.state.skillPoints);
            console.log("Class: " + this.state.class)
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
            this.calculateSkillPoints.bind(this)();
        });

    };

    handleSkillChange = event => {
        const { name } = event.target;

        if (event.target.checked) {
            if (this.state.skillPoints !== 0) {
                this.setState(prevState => ({
                    skillPoints: prevState.skillPoints - 1,
                    [name]: 1
                }));
            } else {
                alert("You do not have any skill points left to spend!");
                event.target.checked = false;
            }
        } else if (!event.target.checked) {
            this.setState(prevState => ({
                skillPoints: prevState.skillPoints + 1,
                [name]: ""
            }));
        };
        console.log(this.state);
    };

    // Resets selected skills and refunds spent skill points
    resetSkills = event => {
        function toggle(source) {
            var checkboxArray = document.getElementsByClassName("skillCheckbox");
            for (var i = 0; i < checkboxArray.length; i++) {
                checkboxArray[i].checked = source.checked;
            };
        };

        toggle(event.target);
        this.calculateSkillPoints.bind(this)();
        this.setState({
            acrobatics: "",
            appraise: "",
            bluff: "",
            climb: "",
            craft: "",
            diplomacy: "",
            disable_device: "",
            disguise: "",
            escape_artist: "",
            fly: "",
            handle_animal: "",
            heal: "",
            intimidate: "",
            knowledge_arcana: "",
            knowledge_dungeoneering: "",
            knowledge_engineering: "",
            knowledge_geography: "",
            knowledge_history: "",
            knowledge_local: "",
            knowledge_nature: "",
            knowledge_nobility: "",
            knowledge_planes: "",
            knowledge_religion: "",
            linguistics: "",
            perception: "",
            perform: "",
            profession: "",
            sense_motive: "",
            sleight_of_hand: "",
            spellcraft: "",
            stealth: "",
            survival: "",
            swim: "",
            use_magic_device: ""
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
            this.calculateSkillPoints.bind(this)();
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
        this.calculateSkillPoints.bind(this)();
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
                // console.log(charStats);
                // console.log(this.state);

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

                // Calculates the amount of skill points available to spend for the character based on their class and intelligence
                this.calculateSkillPoints.bind(this)();
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

    // This selects a random number of skills equal to the amount of skill points you have available.
    randomizeSkills = event => {
        event.preventDefault();
        var skillsArray = document.getElementsByClassName('skillCheckbox');
        let newArray = [];

        //Loops through available skills and creates another array with their ID's. Prevents destruction of the original array.
        for (var z = 0; z < skillsArray.length; z++) {
            newArray.push(skillsArray[z].id);
        };

        if (this.state.skillPoints > 0) {
            for (var m = 0; m < skillsArray.length; m++) {
                skillsArray[m].checked = false;
            };

            var start = 0;
            var end = newArray.length;

            for (var i = 0; i < this.state.skillPoints; i++) {
                // Random index from range [start, end)
                var randomIndex = Math.floor(Math.random() * (end - start)) + start;

                // Get the random element
                var randomSkill = newArray[randomIndex];

                // Swap the random element
                newArray[randomIndex] = newArray[start];
                newArray[start] = randomSkill;

                this.setState({
                    [randomSkill]: 1
                });

                // Increment the start range
                start++;
                document.getElementById(randomSkill).checked = true;
            };
        } else if (this.state.skillPoints <= 0) {
            alert("Please choose a race, a class, and roll your stats before selecting skills.");
        }
        this.setState({
            skillPoints: 0
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
            race: this.state.race,
            class: this.state.class,
            dex: this.state.dex,
            intel: this.state.int,
            stre: this.state.str,
            con: this.state.con,
            wis: this.state.wis,
            cha: this.state.cha,
            acrobatics: this.state.acrobatics,
            appraise: this.state.appraise,
            bluff: this.state.bluff,
            climb: this.state.climb,
            craft: this.state.craft,
            diplomacy: this.state.diplomacy,
            disable_device: this.state.disable_device,
            disguise: this.state.disguise,
            escape_artist: this.state.escape_artist,
            fly: this.state.fly,
            handle_animal: this.state.handle_animal,
            heal: this.state.heal,
            intimidate: this.state.intimidate,
            knowledge_arcana: this.state.knowledge_arcana,
            knowledge_dungeoneering: this.state.knowledge_dungeoneering,
            knowledge_engineering: this.state.knowledge_engineering,
            knowledge_geography: this.state.knowledge_geography,
            knowledge_history: this.state.knowledge_history,
            knowledge_local: this.state.knowledge_local,
            knowledge_nature: this.state.knowledge_nature,
            knowledge_nobility: this.state.knowledge_nobility,
            knowledge_planes: this.state.knowledge_planes,
            knowledge_religion: this.state.knowledge_religion,
            linguistics: this.state.linguistics,
            perception: this.state.perception,
            perform: this.state.perform,
            profession: this.state.profession,
            sense_motive: this.state.sense_motive,
            sleight_of_hand: this.state.sleight_of_hand,
            spellcraft: this.state.spellcraft,
            stealth: this.state.stealth,
            survival: this.state.survival,
            swim: this.state.swim,
            use_magic_device: this.state.use_magic_device
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
                cha: 10,
                acrobatics: "",
                appraise: "",
                bluff: "",
                climb: "",
                craft: "",
                diplomacy: "",
                disable_device: "",
                disguise: "",
                escape_artist: "",
                fly: "",
                handle_animal: "",
                heal: "",
                intimidate: "",
                knowledge_arcana: "",
                knowledge_dungeoneering: "",
                knowledge_engineering: "",
                knowledge_geography: "",
                knowledge_history: "",
                knowledge_local: "",
                knowledge_nature: "",
                knowledge_nobility: "",
                knowledge_planes: "",
                knowledge_religion: "",
                linguistics: "",
                perception: "",
                perform: "",
                profession: "",
                sense_motive: "",
                sleight_of_hand: "",
                spellcraft: "",
                stealth: "",
                survival: "",
                swim: "",
                use_magic_device: "",
                skillPoints: 0,
                baseBonus: {}
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
                                <FormGroup className="text-center">
                                    <Label style={labelStyling} for="character_name">Character Name</Label>
                                    <Input className="text-center" type="text" name="character_name" id="character_name" onChange={this.handleInputChange} placeholder="Name your character" />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="12" lg="6">
                                <Row className="mb-5 mb-sm-5 mb-lg-1">
                                    <Col sm="12" md="8">
                                        <FormGroup>
                                            <Label style={labelStyling} for="gender">Gender</Label>
                                            <Input type="select" name="gender" id="gender" defaultValue="" onChange={this.handleInputChange}>
                                                <option value="">Select character's gender</option>
                                                <option value="Female">Female</option>
                                                <option value="Male">Male</option>
                                            </Input>
                                        </FormGroup>
                                    </Col>
                                    <Col sm="12" md="4" className="mt-md-2">
                                        <Button className="mt-md-4 btn-block" onClick={this.randomizeGender} color="info">Randomize</Button>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm="12" md="12" lg="6">
                                <Row className="mb-sm-4 mb-lg-1">
                                    <Col sm="12" md="8">
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
                                    <Col sm="12" md="4" className="mt-md-2">
                                        <Button className="mt-md-4 btn-block" onClick={this.randomizeAlignment} color="info">Randomize</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="12" lg="6">
                                <Row className="mb-5 mb-sm-5 mb-lg-2">
                                    <Col sm="12" md="8">
                                        <FormGroup>
                                            <Label style={labelStyling} for="race">Race</Label>
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
                                    <Col sm="12" md="4" className="mt-md-2">
                                        <Button className="mt-md-4 btn-block" onClick={this.randomizeRace} color="info">Randomize</Button>
                                    </Col>
                                </Row>
                            </Col>

                            <Col sm="12" md="12" lg="6">
                                <Row className="mb-sm-4 mb-lg-2">
                                    <Col sm="12" md="8">
                                        <FormGroup>
                                            <Label style={labelStyling} for="class">Class</Label>
                                            <Input type="select" name="class" id="class" defaultValue="" onChange={this.handleClassChange}>
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
                                    <Col sm="12" md="4" className="mt-md-2">
                                        <Button className="mt-md-4 btn-block" color="info" onClick={this.randomizeClass}>Randomize</Button>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                        <Row className="mt-3">
                            <Col xs="12" sm="6" md="4" lg="2" className="mb-4">
                                <Card>
                                    <CardHeader className="text-center d-md-none d-lg-none d-xl-block" tag="h5">Strength</CardHeader>
                                    <CardHeader className="text-center d-none d-md-block d-lg-block d-xl-none" tag="h5">STR</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.str}</CardText>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" md="4" lg="2" className="mb-4">
                                <Card>
                                    <CardHeader className="text-center d-md-none d-lg-none d-xl-block" tag="h5">Dexterity</CardHeader>
                                    <CardHeader className="text-center d-none d-md-block d-lg-block d-xl-none" tag="h5">DEX</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.dex}</CardText>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" md="4" lg="2" className="mb-4">
                                <Card>
                                    <CardHeader className="text-center d-md-none d-lg-none d-xl-block" tag="h5">Constitution</CardHeader>
                                    <CardHeader className="text-center d-none d-md-block d-lg-block d-xl-none" tag="h5">CON</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.con}</CardText>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" md="4" lg="2" className="mb-4">
                                <Card>
                                    <CardHeader className="text-center d-md-none d-lg-none d-xl-block" tag="h5">Intelligence</CardHeader>
                                    <CardHeader className="text-center d-none d-md-block d-lg-block d-xl-none" tag="h5">INT</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.int}</CardText>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" md="4" lg="2" className="mb-4">
                                <Card>
                                    <CardHeader className="text-center d-md-none d-lg-none d-xl-block" tag="h5">Wisdom</CardHeader>
                                    <CardHeader className="text-center d-none d-md-block d-lg-block d-xl-none" tag="h5">WIS</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.wis}</CardText>
                                </Card>
                            </Col>
                            <Col xs="12" sm="6" md="4" lg="2" className="mb-4">
                                <Card>
                                    <CardHeader className="text-center d-md-none d-lg-none d-xl-block" tag="h5">Charisma</CardHeader>
                                    <CardHeader className="text-center d-none d-md-block d-lg-block d-xl-none" tag="h5">CHA</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.cha}</CardText>
                                </Card>
                            </Col>
                            <Col className="text-center">
                                (Racial ability modifiers are automatically applied.)
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="2">
                            </Col>
                            <Col sm="12" md="4">
                                <Button className="btn-block mt-sm-3 mt-md-1" color="info" onClick={this.randomizeStats}>Roll Ability Scores</Button>
                            </Col>
                            <Col sm="12" md="4">
                                <Button className="btn-outline-info btn-block mt-4 mt-sm-3 mt-md-1" onClick={this.resetStats}>Reset Ability Scores</Button>
                            </Col>
                            <Col sm="12" md="2">
                            </Col>
                        </Row>
                        <Row className="mt-5">
                            <Col className="text-center">
                                <span style={labelStyling}>Skills</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="3" md="4">
                            </Col>
                            <Col xs="12" sm="6" md="4" className="mb-4">
                                <Card>
                                    <CardHeader className="text-center" tag="h5">Available Skill Points</CardHeader>
                                    <CardText className="text-center mt-4 mb-2" style={statStyling}>{this.state.skillPoints}</CardText>
                                </Card>
                            </Col>
                            <Col sm="3" md="4">
                            </Col>
                        </Row>
                        <Row>
                            <Col xs="12" sm="6" lg="3">
                                <div className="switch">
                                    <label htmlFor="acrobatics">
                                        Acrobatics
                                        <input type="checkbox" className="skillCheckbox" name="acrobatics" id="acrobatics" value="acrobatics" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="appraise">
                                        Appraise
                                        <input type="checkbox" className="skillCheckbox" name="appraise" id="appraise" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="bluff">
                                        Bluff
                                        <input type="checkbox" className="skillCheckbox" name="bluff" id="bluff" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="climb">
                                        Climb
                                        <input type="checkbox" className="skillCheckbox" name="climb" id="climb" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="craft">
                                        Craft
                                        <input type="checkbox" className="skillCheckbox" name="craft" id="craft" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="diplomacy">
                                        Diplomacy
                                        <input type="checkbox" className="skillCheckbox" name="diplomacy" id="diplomacy" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="disable_device">
                                        Disable Device
                                        <input type="checkbox" className="skillCheckbox" name="disable_device" id="disable_device" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="disguise">
                                        Disguise
                                        <input type="checkbox" className="skillCheckbox" name="disguise" id="disguise" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                            </Col>
                            <Col xs="12" sm="6" lg="3">
                                <div className="switch">
                                    <label htmlFor="escape_artist">
                                        Escape Artist
                                        <input type="checkbox" className="skillCheckbox" name="escape_artist" id="escape_artist" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="fly">
                                        Fly
                                        <input type="checkbox" className="skillCheckbox" name="fly" id="fly" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="handle_animal">
                                        Handle Animal
                                        <input type="checkbox" className="skillCheckbox" name="handle_animal" id="handle_animal" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="heal">
                                        Heal
                                        <input type="checkbox" className="skillCheckbox" name="heal" id="heal" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="intimidate">
                                        Intimidate
                                        <input type="checkbox" className="skillCheckbox" name="intimidate" id="intimidate" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_arcana">
                                        Knowledge (Arcana)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_arcana" id="knowledge_arcana" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_dungeoneering">
                                        Knowledge (Dungeoneering)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_dungeoneering" id="knowledge_dungeoneering" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_engineering">
                                        Knowledge (Engineering)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_engineering" id="knowledge_engineering" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_geography">
                                        Knowledge (Geography)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_geography" id="knowledge_geography" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                            </Col>
                            <Col xs="12" sm="6" lg="3">
                                <div className="switch">
                                    <label htmlFor="knowledge_history">
                                        Knowledge (History)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_history" id="knowledge_history" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_local">
                                        Knowledge (Local)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_local" id="knowledge_local" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_nature">
                                        Knowledge (Nature)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_nature" id="knowledge_nature" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_nobility">
                                        Knowledge (Nobility)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_nobility" id="knowledge_nobility" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_planes">
                                        Knowledge (Planes)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_planes" id="knowledge_planes" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="knowledge_religion">
                                        Knowledge (Religion)
                                        <input type="checkbox" className="skillCheckbox" name="knowledge_religion" id="knowledge_religion" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="linguistics">
                                        Linguistics
                                        <input type="checkbox" className="skillCheckbox" name="linguistics" id="linguistics" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="perception">
                                        Perception
                                        <input type="checkbox" className="skillCheckbox" name="perception" id="perception" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="perform">
                                        Perform
                                        <input type="checkbox" className="skillCheckbox" name="perform" id="perform" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                            </Col>
                            <Col xs="12" sm="6" lg="3">
                                <div className="switch">
                                    <label htmlFor="profession">
                                        Profession
                                        <input type="checkbox" className="skillCheckbox" name="profession" id="profession" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="sense_motive">
                                        Sense Motive
                                        <input type="checkbox" className="skillCheckbox" name="sense_motive" id="sense_motive" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="sleight_of_hand">
                                        Sleight of Hand
                                        <input type="checkbox" className="skillCheckbox" name="sleight_of_hand" id="sleight_of_hand" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="spellcraft">
                                        Spellcraft
                                        <input type="checkbox" className="skillCheckbox" name="spellcraft" id="spellcraft" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="stealth">
                                        Stealth
                                        <input type="checkbox" className="skillCheckbox" name="stealth" id="stealth" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="survival">
                                        Survival
                                        <input type="checkbox" className="skillCheckbox" name="survival" id="survival" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="swim">
                                        Swim
                                        <input type="checkbox" className="skillCheckbox" name="swim" id="swim" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                                <div className="switch">
                                    <label htmlFor="use_magic_device">
                                        Use Magic Device
                                        <input type="checkbox" className="skillCheckbox" name="use_magic_device" id="use_magic_device" onChange={this.handleSkillChange} />
                                        <span className="lever"></span>
                                    </label>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm="12" md="2">
                            </Col>
                            <Col sm="12" md="4">
                                <Button className="btn-block mt-sm-3 mt-md-1" color="info" onClick={this.randomizeSkills}>Randomize Skill Selection</Button>
                            </Col>
                            <Col sm="12" md="4">
                                <Button className="btn-outline-info btn-block mt-4 mt-sm-3 mt-md-1" onClick={this.resetSkills}>Reset Selected Skills</Button>
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