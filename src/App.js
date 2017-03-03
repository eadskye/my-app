import React, { Component } from 'react';
import { Form, Text } from 'react-form'
import './App.css';


class App extends Component {



  render() {
    return (


      <div className="App">
        <div className="App-header">
        <nav className="navbar navbar-inverse">
        <ul className="breadcrumb">
        <ul><a href="#">Login</a></ul>
        <ul><a href="#">About</a></ul>

        </ul>
        </nav>
          <h1>Mandala</h1>
        </div>

        <p className="App-intro">
          <h3>Social Support Network Mapping Technology</h3>
          A Social Support Network is a group of people which you communicate with on a regular basis.
          Diagram you current social network.

          This is your Social Support Network.

          Remember, you can do it, but you can’t do it alone!!
        </p>
      </div>
    );
  }
}


export default App;
