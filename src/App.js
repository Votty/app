import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Register} from './components/Register.jsx';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container zindex-modal">
          <h1 className="my-4 text-light">
            VOTTY <br/> Blockchain-based voting platform
          </h1>
          <hr className="bg-light"/>
          <Register />
        </div>
      </div>
    );
  }
}

export default App;
