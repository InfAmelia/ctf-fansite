import React, { Component } from 'react';
import '../css/colors.css'
import '../css/video.css'
import PropTypes from 'prop-types';
import TwitchVideoEmbed from './twitch_video_embed.js'

class Video extends Component {
  static propTypes = {
    channel: PropTypes.string,
    gameName: PropTypes.func
  }

  render() {
    return (<div className="card">
      <div className="card-body">
        <TwitchVideoEmbed channel={this.props.channel} />
      </div>
      <div className="card-footer">
        <div className="row video-footer">
          <div className="col-4 branded-text">
            Now playing: {this.props.gameName()}
          </div>
          <span className="col-3"></span>
          <span className="branded-text col-5 text-right"><i className="align-middle material-icons red">person</i>Error retrieving viewer count.</span>
        </div>
      </div>
    </div>)
  }
}

export default Video;
