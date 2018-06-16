import React, { Component } from 'react';
import "../styles/Flag.css";

export default class Flag extends Component {
  render() {
    return (
      <img className="img-fluid flag"
        id={"flag" + this.props.id}
        src={this.props.src}
        alt={this.props.name}

        // onClick={ () => function to handle click this.props.handleClick(this.props.id) }
        // { this.props.children }
      />
    )
  }
}
