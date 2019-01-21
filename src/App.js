import React, { Component } from 'react';
import './App.css';

import { Alert } from 'reactstrap';

import Page1 from './pages/Page1';
import Header from './pages/Header'
import Formulario from './pages/Formulario'



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="Container" >
          <Formulario />
        </div>
        <div className="App">
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

          <div>
            <Alert color="success">
              <h4 className="alert-heading">Well done!</h4>
              <p>
                Aww yeah, you successfully read this important alert message. This example text is going
                to run a bit longer so that you can see how spacing within an alert works with this kind
                of content.
            </p>
              <hr />
              <p className="mb-0">
                Whenever you need to, be sure to use margin utilities to keep things nice and tidy.
            </p>
            </Alert>
          </div>


        </div>
      </div>
    );
  }
}

export default App;
