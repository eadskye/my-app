import React, { Component } from 'react';
import { Form, Text } from 'react-form'
import './App.css';


export default class App extends Component {



  render() {
    return (

<div>
React Simple start
{this.props.children}
</div>

);
}
}

export default App;
