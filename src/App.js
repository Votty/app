import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Register } from './components/Register.jsx';
import { Admin } from './components/Admin.jsx';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Register} />
          <Route exact path="/admin" component={Admin} />
        </div>
      </Router>
    );
  }
}

export default App;
