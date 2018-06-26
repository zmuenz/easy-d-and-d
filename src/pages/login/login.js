import React, { Component } from 'react';
import { Container, Button, Form, FormGroup, Label, Input } from 'reactstrap';

export class login extends Component {
  render() {
    return (
      <Container className="mt-4">
        <h1>Login with your EZ D&amp;D account</h1>
        <Form className="mt-4">
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" id="email" placeholder="Account email address" />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" id="password" placeholder="Enter your password" />
          </FormGroup>
          <Button className="mr-3" color="info">Log In</Button><Button color="info" href="/signup">Sign up!</Button>
        </Form>
      </Container>
    );
  }
}
