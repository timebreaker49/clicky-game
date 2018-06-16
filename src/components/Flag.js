import React, { Component } from 'react';
import "../styles/Flag.css";

export default class Flag extends Component {
  render() {
    return (
      <img className="img-fluid flag"
        id={this.props.id}
        src={this.props.src}
        alt={this.props.name}
        onClick={ () => this.props.clickHandler(this.props.id) }        
      />
    )
  }
}
