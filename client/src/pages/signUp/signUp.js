import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class SignUp extends Component {

  render() {
    return (
      <Container className="mt-4">
        <h1>Create your EZ D&amp;D account</h1>
        <Form className="mt-4">
          <FormGroup>
            <Label for="userName">Username</Label>
            <Input type="name" name="userName" id="userName" placeholder="Create a Username" />
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
