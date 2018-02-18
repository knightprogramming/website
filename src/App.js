import React, { Component } from 'react';
import ReactSVG from 'react-svg';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <h1 className="title">Knight Programming</h1>
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
