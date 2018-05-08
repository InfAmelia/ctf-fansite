import React, { Component } from 'react';
import PropTypes from 'prop-types';

var p3 = "2e724"

class Card extends Component {
  static propTypes = {
      // Card Shape
      height: PropTypes.number,
      width: PropTypes.number,
      img_path: PropTypes.string,
      footer: PropTypes.bool,

      // whether to display a video and the channel
      video: PropTypes.bool,
      channel: PropTypes.string,

      // Non-video content and it's behavior
      body: PropTypes.object,
      overflow: PropTypes.bool
    }

  render() {
    let footer;

    if(this.props.footer){
      footer = <div className="card-footer">
        <input className="form-control" placeholder="Send a message"></input>
      </div>
    }

    return <div className={"col-" + this.props.width}>
      <div className={"card h-" + this.props.height}>
        <div className="card-img-top" src={this.props.img_path} alt='placeholder-for-stream'></div>
        <div className="chat card-body">
          {this.props.body}
        </div>
          {footer}
      </div>
    </div>
  }
}

export default Card;
