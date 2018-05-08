import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = { username_value: '', password_value: '', errors: []};

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  static propTypes = {
    flagShown: PropTypes.func
  }

  twentySixCharacters() {
    const twenty_six_chars = /^.{26}$/
    return this.testRegex(twenty_six_chars, "Password must be 26 characters in length.");
  }

  noFives() {
    const no_fives = /(\b[^5]+\b)/
    return this.testRegex(no_fives, "Password must have no fives.");
  }

  threeSymbols() {
    const three_symbols = /(.?[*&^%$#@!?].?){3}/
    return this.testRegex(three_symbols, "Password must have three symbols.");
  }

  ninjaTurtle() {
    const ninja_turtles = /(.?Leonardo|Michelangelo|Donatello|Raphael.?)/i
    return this.testRegex(ninja_turtles, "Password must contain the name of a Ninja Turtle");
  }

  regex() {
    const regex = /\/((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)/
    return this.testRegex(regex, "Password must be valid regex");
  }
  // /[Raphael #1]([&%])?(\[)?/
  regexRegex() {
    const regex_test = "raphael #1"
    let pwRegex = new RegExp(this.state.password_value)
    debugger;
    if(pwRegex.test(regex_test)) {
      return null;
    } else {
      return "Must select `Raphael #1`"
    }
  }

  email() {
    const email_address_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return this.testRegex(email_address_regex);
  }

  testRegex(regex, errorMsg) {
    if(regex.test(this.state.password_value)){
      return null;
    } else {
      return errorMsg
    }
  }

  handleUsernameChange(event) {
    this.setState({ username_value: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password_value: event.target.value });
  };

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.password_value) {
      let t = this.twentySixCharacters() || this.threeSymbols() || this.noFives() || this.ninjaTurtle() || this.regex() || this.regexRegex();
      if (t) {
        this.setState({ errors: [t] })
      } else {
        this.props.flagShown("4 - bWFyYXRob24gcnVubmVy")
      }
    }
  }

  updateErrors(error) {
    this.setState({ errors: this.state.errors.concat([error])})
  }

  renderErrors(){
    let error = this.state.errors[0]
    return (
    <div className="row modal-row">
      <div className="col-1"></div>
      <div className="form-error col-11">{error}</div>
    </div>);
      // if(this.state.errors) {
      //   return (
      //     <div className="row modal-row">
      //       {this.state.errors.map((error, index) => {
      //         return <div key={"error" + index}>{error}</div>
      //       })}
      //     </div>
      // );
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
        {this.renderErrors()}
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
