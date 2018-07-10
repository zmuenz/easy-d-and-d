import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'tachyons';
import API from '../../../utils/API';

class SignUp extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
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
      firstName: this.state.firstName,
      lastName: this.state.lastName,  
      userName: this.state.userName,
      email: this.state.email,
      password: this.state.password
      
    })
    .then(API.loginUser({
        userName: this.state.userName,
        password: this.state.password
      })  
    )
    .then(user => {
        let userName = JSON.stringify(user.data.userName)
        let firstName = JSON.stringify(user.data.firstName)
        let lastName = JSON.stringify(user.data.lastName)
        let email = JSON.stringify(user.data.email)
        let id = JSON.stringify(user.data.id)
        sessionStorage.setItem('userName', userName);
        sessionStorage.setItem('firstName', firstName);
        sessionStorage.setItem('lastName', lastName);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('id', id);
      this.props.history.push("/dashboard");
      })
    };

    render() {
    return (
        <div id="signUpModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content text-center">
                    <div className="modal-header">
                        <h5 className="modal-title tc" id="exampleModalLabel">Join the Group!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" name="firstName" className="form-control" id="firstName" onChange={this.handleInputChange} placeholder="Enter first name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" name="lastName" className="form-control" id="lastName" onChange={this.handleInputChange} placeholder="Enter last name" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputEmail1">Email address</label>
                                <input type="text" name="email" id="email" onChange={this.handleInputChange} placeholder="Email" />
                                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div className="form-group">
                                <label htmlFor="username">userName</label>
                                <input type="text" name="userName" id="userName" onChange={this.handleInputChange} placeholder="Username" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="exampleInputPassword1">Password</label>
                                <input type="password" name="password" id="password" onChange={this.handleInputChange} placeholder="Password" />
                            </div>
                            <div className="modal-footer center">
                                <button type="button" data-dismiss='modal' onClick={this.handleFormSubmit} className="btn btn-primary">Join!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
};

export default withRouter(SignUp);