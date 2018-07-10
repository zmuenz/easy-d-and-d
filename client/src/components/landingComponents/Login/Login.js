import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'tachyons';
import API from '../../../utils/API';

class Login extends Component { 
    constructor(props) {
      super(props);
      this.state = {
        userName: "",
        password: "",
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
      API.loginUser({  
        userName: this.state.userName,
        password: this.state.password
      })  
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
  
        function resetForm() {
        document.getElementById("userName").value = "";
        document.getElementById("password").value = "";
        this.setState({
            userName: "",
            password: ""
  
        });
    };
    resetForm.bind(this)();
  };

render() {
    return (
        <div id="loginModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content text-center">
                    <div className="modal-header">
                        <h5 className="modal-title tc" id="exampleModalLabel">Join the Game!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
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
      }
export default withRouter(Login);