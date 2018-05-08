import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username_value: '', password_value: ''};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    flagShown: PropTypes.func
  }

  handleUsernameChange(event) {
    this.setState({ username_value: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password_value: event.target.value });
  };

  handleSubmit(event) {
    if(this.state.password_value === "2e724xvt092b8412") {
      if(this.state.username_value === "ADMIN"){
        this.props.flagShown("eW91IHdpbGwgYmUgYXNzaW1pbGF0ZWQ=");
      }
    } else {
      console.log("authy error: TRY AGAIN")
    }
  }

  render() {
    return (<form onSubmit={this.handleSubmit}>
      <div className="row modal-row">
        <div className="col-2">
          <label className="branded-text control-label">Username</label>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <input type="text" value={this.state.username_value} onChange={this.handleUsernameChange} className="form-control" name="Username"></input>
        </div>
      </div>
      <div className="row modal-row">
        <div className="col-2">
          <label className="branded-text control-label">Password</label>
        </div>
        <div className="col-1"></div>
        <div className="col-6">
          <input value={this.state.password_value} onChange={this.handlePasswordChange} className="form-control" name="Password"></input>
        </div>
        <div className="col-1"></div>
      </div>
      <div className="row modal-row forgot-pw">
        ... <u>I forgot my password</u>
      </div>
      <div className="modal-footer">
        <button value="back" className="btn btn-danger" onClick={this.props.onClose}>
          Back
        </button>
        <button value="submit" className="btn btn-primary" onClick={this.props.onClose}>
          Save
        </button>
      </div>
    </form>);
  }
}
