import React, { Component } from 'react';
import Chat from './chat.js'
import Video from './video.js'
import messages from '../messages.json'

class Home extends Component {
  gameLink() {
    return <a href="http://steamcommunity.com/app/515230/">Cleos Lost Idols</a>
  }

  render (){
    return (<div className="row">
      <Video channel={"societist420"} gameName={this.gameLink} />
      <Chat overflow={true} height={600} delay_seed={100} messages={messages} chatMessages={[]} />
    </div>)
  }
}

export default Home;
