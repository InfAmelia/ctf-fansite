import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/chat_message.css';
import '../css/colors.css';

class ChatMessage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      removed: false
    }
  }

  componentWillMount(){
    if(this.props.removalDelay){
      this.interval = setInterval(() => { this.removeMessage() }, this.props.removalDelay)
    }
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  removeMessage(){
    this.setState({ removed: true })
  }

  static propTypes = {
      username: PropTypes.string,
      body: PropTypes.string,
      color: PropTypes.string,
      removalDelay: PropTypes.string
    }

  body() {
    // this is done intentionally to allow for the participant to access the flag by parsing json
    if (this.state.removed) {
      return "Content Removed by Moderator"
    } else {
      return this.props.body;
    }
  }

  username() {
    if (this.state.removed) {
      return "AutoModerator"
    } else {
      return this.props.username;
    }
  }

  render() {
    // have a username that is a flag which is removed?
    return <div className="chat-message-body">
        <span className={"chat-username " + this.props.color}>{ this.username() }</span>
        <span className="chat-message">{ this.body() }</span>
      </div>
  }
}

export default ChatMessage;
