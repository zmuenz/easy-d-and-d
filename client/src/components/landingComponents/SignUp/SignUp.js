import React, { Component } from 'react';
import 'tachyons';
import API from '../../../utils/API';

export class SignUp extends Component { 
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
                            <div id='firstName' className="form-group col-sm-6">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" className="form-control" id="firstName" placeholder="Enter first name" />
                            </div>
                            <div id='lastName' className="form-group col-sm-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" className="form-control" id="lastName" placeholder="Enter last name" />
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
                                <input type="text" name="password" id="password" onChange={this.handleInputChange} placeholder="Password" />
                            </div>
                            <div className="modal-footer center">
                                <button type="button" data-dismiss='modal' className="btn btn-primary">Join!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
};

export default SignUp;