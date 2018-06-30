import React, { Component } from 'react';
import { Row, Col, Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import API from '../../utils/API';

export class Login extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      email : ""
    }
  };

handleInputChange = event => {
  // Destructure the name and value properties off of event.target
  // Update the appropriate state
  const { name, value } = event.target;
  this.setState({
      [name]: value
  });
};

handleFormSubmit = event => {
  event.preventDefault();
  console.log(this.state);
    API.saveNewUser({  
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
      
    })  

      function resetForm() {
      document.getElementById("userName").value = "";
      document.getElementById("email").value = "";
      document.getElementById("password").value = "";
      this.setState({
          userName: "",
          email: "", 
          password: ""

      });
  };
  resetForm.bind(this)();
};

  render() {
    return (
<Container>
<Form className="mt-5">
    <Row>
        <Col>
            <FormGroup>
                <Label for="UserName">Username</Label>
                <Input type="text" name="userName" id="userName" onChange={this.handleInputChange} placeholder="Username" />
            </FormGroup>
            <FormGroup>
                <Label for="password">Password</Label>
                <Input type="text" name="password" id="password" onChange={this.handleInputChange} placeholder="Password" />
            </FormGroup>
          <Button color="info" type="submit" onClick={this.handleFormSubmit}>Submit</Button>
          </Col>
          </Row>
        </Form>
      </Container>
    );
  }
};
