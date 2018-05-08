import React, { Component } from 'react';
import Card from './card.js'

class StoreItem extends Component {
  constructor() {
    super(props);
  }

  static propTypes = {
    itemName: PropTypes.string,
    itemDescription: PropTypes.string,
    itemImagePath: Proptypes.string
  }

  render (){
    return <Card body={this.props.itemDescription} title={this.props.itemName} img_path={this.props.itemImagePath} />
  }
}

export default StoreItem;
