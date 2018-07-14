import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import 'tachyons';

class Logout extends Component { 
    
    handleFormSubmit = event => {
    sessionStorage.clear();
    this.props.history.push("/")

    }

render() {
    return (
        <div id="logoutModal" className="modal fade" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content text-center">
                    <div className="modal-header">
                        <h5 className="modal-title tc" id="exampleModalLabel">Come back soon for the fight!</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                        <div className="modal-footer center">
                        <button type="button" data-dismiss='modal' onClick={this.handleFormSubmit} className="btn btn-primary">Logout</button>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
    )
}
      }
      export default withRouter(Logout);