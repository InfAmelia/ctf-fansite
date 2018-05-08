import React, { Component } from 'react';
import Card from "./card.js"
import PropTypes from 'prop-types';
import ChatMessage from './chat_message.js';

class Chat extends Component {
  constructor(props){
    super(props);

    this.state = {
      lastIndex: 0,
      messages: []
    }
  }

  static propTypes = {
      messages: PropTypes.array,
      chatMessages: PropTypes.array,
      usernames: PropTypes.array,
      delay_seed: PropTypes.number
    }

  render() {
    let body = this.renderFormattedMessages();
    return <Card height={600} width={3} body={body} footer={true} overflow={true} />
  }

  componentWillMount(){
    let delay = this.props.delay_seed;
      this.interval = setInterval(() => {
        if(this.props.messages[this.state.lastIndex]){
          this.insertMessage(this.state.lastIndex);
          this.setState({ lastIndex: this.state.lastIndex + 1 });
          delay = Math.floor(this.props.delay_seed * (10 * Math.random()));
        }
      }, delay);
    }

  scrollToBottom() {
    this.messagesEnd.scrollIntoView({behavior: "auto"});
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  renderFormattedMessages(){
    let content = (
      this.state.messages.map((message, index) => {
       return <div key={message.username + index}>
        <ChatMessage color={message.color} username={message.username} body={message.body} removalDelay={message.removalDelay} />
       </div>
     }));

    return (
        <div>{content}
          <div style={{ float: "left", clear: "both" }} ref={(el) => { this.messagesEnd = el; }}></div>
        </div>)
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  componentDidMount() {
    this.scrollToBottom();
  }

  insertMessage(index){
    this.setState({
      messages: this.state.messages.concat([this.props.messages[index]])
    })
  }
}

export default Chat;
