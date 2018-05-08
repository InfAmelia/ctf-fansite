import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class PwRegexValidator extends Component {
  static propTypes = {
    password: PropTypes.string,
    updateFunc: PropTypes.func
  }

  twentySixCharacters() {
    const twenty_six_chars = /^.{26}$/
    this.testRegex(twenty_six_chars, "Password must be 26 characters in length.");
  }

  noFives() {
    const no_fives = /(\b[^5]+\b)/
    this.testRegex(no_fives, "Password must have no fives.");
  }

  threeSymbols() {
    const three_symbols = /(.?[*&^%$#@!].?){3}/
    this.testRegex(three_symbols, "Password must have three symbols.");
  }

  ninjaTurtle() {
    const ninja_turtles = /(.?Leonardo|Michelangelo|Donatello|Raphael.?)/i
    this.testRegex(ninja_turtles, "Password must contain the name of a Ninja Turtle");
  }

  regex() {
    const regex = /\/((?![*+?])(?:[^\r\n\[/\\]|\\.|\[(?:[^\r\n\]\\]|\\.)*\])+)\/((?:g(?:im?|mi?)?|i(?:gm?|mg?)?|m(?:gi?|ig?)?)?)/
    this.testRegex(regex, "Password must be valid regex");
  }

  regexRegex() {
    const regex_test = "raphael #1"
    this.props.password.test(regex_test, "Password must be able to successfully regex `raphael #1`")
  }

  email() {
    const email_address_regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    this.testRegex(email_address_regex);
  }

  testRegex(regex, errorMsg) {
    if(regex.test(this.props.password)){
      return null;
    } else {
      return errorMsg
    }
  }

  // this isn't really used.
  render (){
    let errors;

    debugger;

    if(this.props.password) {
      errors = this.twentySixCharacters() +
      this.threeSymbols() +
      this.noFives() +
      this.ninjaTurtle() +
      this.regex() +
      this.regexRegex();
    } else {
      errors = "You must provide a password."
    }

    debugger;

    if(errors) {
      this.props.updateFunc(errors);
    }

    return <div>hi</div>
  }
}
