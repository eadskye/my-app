import React, { Component } from 'react';
import { Form, Text } from 'react-form'
import '../styles/App.css';
import { Navbar } from '../components/navbar.js';

export default class App extends Component {
  render () {
    return (
      <div>
        <Navbar />
        {this.props.children}
      </div>
    );
  }
}
