import React, { Component } from 'react';
import NavbarItem from './navbar_item.js';
import PropTypes from 'prop-types'


class Login extends Component {
  static propTypes = {
    onLoginClick: PropTypes.func,
    onSignupClick: PropTypes.func
  }

  render (){
    return (
      <div className="navbar-item col-3">
          <NavbarItem onClick={this.props.onLoginClick.bind(this)} title="Log in" /><span className="branded-offtext">or</span><NavbarItem onClick={this.props.onSignupClick.bind(this)} title="Sign Up" />
      </div>)
  }
}

export default Login;
