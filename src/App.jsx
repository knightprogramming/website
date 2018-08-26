import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <ReactSVG
            path="kplogo.svg"
            className="logo"
          />
        </header>
        <ReactSVG
          path="knight_fail.svg"
          className="knight_fail"
        />
        <h3>Sorry our website is in currently having its face rebuilt.</h3>
      </div>
    );
  }
}

export default App;
