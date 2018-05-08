import React, { Component } from 'react';
import Card from './card.js'

class Store extends Component {
  storeItems() {
    return (
      <div className="row">
        <Card width={2} />
        <Card width={2} />
        <Card width={2} />
        <Card width={2} />
        <Card width={2} />
      </div>)
  }

  render() {
    // return (
    //   <div className="store">
    //     <div className='row'>
    //       <Card width={12} body={this.storeItems()} />
    //     </div>
    //   </div>
    // )
      return (<h1> Store Temporareily Unavailable. Sorry. </h1>)
    }
}

export default Store;
