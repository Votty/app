import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {CandidateList} from './components/CandidateList.jsx';
import {Register} from './components/Register.jsx';
import {List} from './components/List.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
        <h1 className="my-4 text-light">
        VOTTY<br/>Blockchain-based voting platform</h1>
        <hr className="bg-light py-1"/>
        </div>
        < CandidateList />
        <Register />
      </div>
    );
  }
}

export default App;
