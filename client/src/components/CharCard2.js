import React from 'react';
import 'tachyons';
import { Container, Row, Col, Card, CardBody, CardTitle, CardText, CardImg } from 'reactstrap';
import API from '../utils/API';

export class CharCard2 extends React.Component {
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
            <Container style={{ marginTop: '30px' }}>
                <Row>
                    <Col>
                        <Card>

                            <CardBody>
                                <CardTitle>Character Name: {} </CardTitle>
                                <CardText>Description</CardText>
                                <CardText>
                                    <small className="text-muted">Last updated 3 mins ago</small>
                                </CardText>
                            </CardBody>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default CharCard2;