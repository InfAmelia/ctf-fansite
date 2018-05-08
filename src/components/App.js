import React, { Component } from 'react';
import '../css/bootstrap.css';
import Navbar from './navbar.js';
import '../css/App.css';
import Store from './store.js'
import Archive from './archive.js'
import Home from './home.js'
import Modal from './modal.js';
import emblemLeft from '../emblem-left.png'
import emblemRight from '../emblem-right.png'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedComponent: "Home",
      showModal: false,
      modalSelected: ''
    }
  }

  updateSelectedComponent(title) {
    if (["Home", "Store", "TipJar", "Archive"].indexOf(title) >= 0) {
      this.setState({ selectedComponent: title })
    } else {
      console.log("Unknown component:" + { title })
    }
  }

  renderSelectedComponent() {
    switch(this.state.selectedComponent) {
      case "Home":
        return <Home />
      case "Store":
        return <Store />
      case "TipJar":
        console.log("this should not be reached.")
        return <Home />
      case "Archive":
        return <Archive />
      default:
        console.log("default case of renderSelectedComponent hit")
        return <Home />
    }
  }

  toggleModal(title) {
    this.setState({ modalOpen: !this.state.modalOpen, modalSelected: title });
  }

  //<div className="align-middle col"><span className="branded-text">3:00-9:00</span></div>

  render() {
    return (
      <div className="App">
      <Modal title={this.state.modalSelected} show={this.state.modalOpen} onClose={this.toggleModal.bind(this)} />
      <Navbar modalFunction={this.toggleModal.bind(this)} updateFunction={this.updateSelectedComponent.bind(this)} />
        <header>
          <div className="title-container row">
            <img className="col-2 emblem-left" src={emblemLeft} alt="3:00-9:00 pm"/>
            <div className="col-5">
              <div href="/">
                <span className="align-middle branded-title-text">streamer</span>
                <span className="align-middle branded-title-offtext">.tv</span>
              </div>
            </div>
            <img className="col-2 emblem-right" src={emblemRight} alt="3:00-9:00 pm"/>
            <div className="col extra-right"></div>
          </div>
        </header>
        <div className="App-body container">
          {this.renderSelectedComponent()}
        </div>
      </div>
    );
  }
}



export default App;
