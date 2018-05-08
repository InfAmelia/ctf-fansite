import React, { Component } from 'react';
import Login from './login.js';
import '../css/navbar.css'
import NavbarItem from './navbar_item.js'
import PropTypes from 'prop-types';

class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpen: false
    }
  }

  static propTypes = {
    updateFunction: PropTypes.func.isRequired,
    modalFunction: PropTypes.func
  }

  render (){
    return <div className="container">
      <div className="navbar-row row">
        <NavbarItem updateFunction={this.props.updateFunction.bind(this)} title="Home" />
        <NavbarItem updateFunction={this.props.updateFunction.bind(this)} title="Archive" />
        <NavbarItem updateFunction={this.props.updateFunction.bind(this)} title="Tipjar" />
        <NavbarItem updateFunction={this.props.updateFunction.bind(this)} title="Store" />
        <div className="col-5 branded-text navbar-item"></div>
        <Login onSignupClick={this.props.modalFunction.bind(this)} onLoginClick={this.props.modalFunction.bind(this)}/>
      </div>
    </div>
  }
}

export default Navbar;
