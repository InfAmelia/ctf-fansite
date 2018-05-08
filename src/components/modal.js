import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LoginForm from './login_form.js';
import SignupForm from './signup_form.js';
import '../css/modal.css'

export default class Modal extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flag: ''
    }
  }

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool,
    children: PropTypes.node,
    body: PropTypes.object,
    title: PropTypes.string
  };

modalBody(){
  let form = this.props.title === "Log in" ? <LoginForm flagShown={this.updateFlagState.bind(this)} /> : <SignupForm flagShown={this.updateFlagState.bind(this)} />

  let content = (
    <div className="modal-body">
      {form}
    </div>
  )

  if (this.state.flag) {
    return <div className="GLAF">{this.state.flag}</div>
  } else {
    return content;
  }
}

updateFlagState(title) {
  this.setState({ flag: title })
}

render() {
  if(!this.props.show) {
      return null;
    }

      return (
        <div className="twitchModal">
          <div className="">
          <div className="modal fade show">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h4 className="branded-text modal-title">{this.props.title}</h4>
                  <button type="button" className="close" onClick={this.props.onClose}>×</button>
                </div>
                  {this.modalBody()}
            </div>
          </div>
        </div>
      </div>
      </div>
      );
    }
}
