import React, { Component } from 'react';
import { Form, Text } from 'react-form'

class App extends Component {
  render() {
    return (
      <div style={style.container}>
        <span style={style.header}>
        React Simple start
        {this.props.children}
        </span>
      </div>
    );
  }
}

const style = {
  container: {
    display: 'flex',
    alignItems: 'center',
    width: '100vw',
    backgroundColor: 'black',
  },
  header: {
    width: '100%',
    maxWidth: '540px',
  }

};

export default App;
