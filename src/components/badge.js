import React from 'react';


class extends React.Component {

  render() {
    return (
      <button className="btn btn-primary" type="button">
    {this.props.title} <span className="Badge">{this.props.number}</span>
      </button>
    );
  }
}

export default;
