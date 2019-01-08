import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Page1 from './pages/Page1';
import { Nav, NavItem } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          {/* <Page1 /> */}

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
          <div>
            <Nav
              bsStyle="tabs"
              justified
              activeKey={1}
              onSelect={key => this.handleSelect(key)}
            >
              <NavItem eventKey={1} href="/home">
                NavItem 1 content
          </NavItem>
              <NavItem eventKey={2} title="Item">
                NavItem 2 content
          </NavItem>
              <NavItem eventKey={3} disabled>
                NavItem 3 content
          </NavItem>
            </Nav>
            <br />
            <Nav
              bsStyle="pills"
              justified
              activeKey={1}
              onSelect={key => this.handleSelect(key)}
            >
              <NavItem eventKey={1} href="/home">
                NavItem 1 content
          </NavItem>
              <NavItem eventKey={2} title="Item">
                NavItem 2 content
          </NavItem>
              <NavItem eventKey={3} disabled>
                NavItem 3 content
          </NavItem>
            </Nav>
          </div>
        </header>


      </div>
    );
  }
}

export default App;
