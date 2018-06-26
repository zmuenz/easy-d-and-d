import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export class signUp extends Component {

  render() {
    return (
      <Container>
        <Form className="mt-5">
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
    );
  }
};
