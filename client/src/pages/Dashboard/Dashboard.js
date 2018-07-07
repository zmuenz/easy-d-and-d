import React, { Component } from 'react';
// import { Scroll } from '../../components/Scroll.js';
// import { CardList } from '../../components/CardList.js';
import API from '../../utils/API';
// import NavBar from '../../components/NavBar';
import { Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import '../../App.css';
import 'tachyons';

// export class Dashboard extends Component {
//     render() {
//         return (
//             <Container className="my-4">
//                 ( <h1 className="text-center">Check out all your characters here!</h1>)
//                 < div className='tc' >
//                     <h1 className='f1 tc'> Your Characters </h1>
//                     <Scroll>
//                         <CardList image={this.state.image} />
//                     </Scroll>
//                 </div>
//             </Container>
//         );
//     }
// };
export class Dashboard extends Component {
    state = {
        characters: [],
    };

    componentDidMount() {
        this.loadCharacters();
    }

    loadCharacters = () => {
        API.getCharacters()
            .then(res =>
                this.setState({ characters: res.data })
            )
            .catch(err => console.log(err));
    };

    render() {
        return (
            <div>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Character Name: {this.state.characters.character_name} </CardTitle>
                        <CardText>Description</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <CardTitle>Character Name</CardTitle>
                        <CardText>Description</CardText>
                        <CardText>
                            <small className="text-muted">Last updated 3 mins ago</small>
                        </CardText>
                    </CardBody>
                    <CardImg bottom width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                </Card>
            </div>
        );

    };
};

export default Dashboard;