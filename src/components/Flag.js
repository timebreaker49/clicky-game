import React, { Component } from 'react';

export default class Flag extends Component {
  render() {
    return (
      <div className="flag">
        { this.props.children }
      </div>
    )
  }
}
