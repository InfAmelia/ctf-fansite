import React, { Component } from 'react';
import '../css/navbar.css'
import PropTypes from 'prop-types';

class NavbarItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      hover: false
    };
  }

  static propTypes = {
      title: PropTypes.string,
      updateFunction: PropTypes.function,
    }

  onMouseEnter(){
    this.setState({ hover: true })
  }

  onMouseLeave(){
    this.setState({ hover: false })
  }

  onClick(title){
    if(this.props.onClick) {
      this.props.onClick(title);
    } else {
      if (title === "Tipjar") {
        window.location = "https://www.patreon.com/user/overview?u=10856146";
      } else {
        this.props.updateFunction(title);
      }
    }
  }

  render (){
    return <span onMouseLeave={() => this.onMouseLeave()}
                onMouseEnter={() => this.onMouseEnter()}
                onClick={() => this.onClick(this.props.title)} className={"col-1 branded-text navbar-item hover-" + this.state.hover } >{this.props.title}</span>
  }
}

export default NavbarItem;
