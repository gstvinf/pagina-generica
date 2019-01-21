import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Page1 from './pages/Page1';
// import PrimarySearchAppBar from './pages/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Teste1</h1>
        { /** <PrimarySearchAppBar /> */}
        <header className="App-header">


          <Page1 />

          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>


      </div>
    );
  }
}

export default App;
