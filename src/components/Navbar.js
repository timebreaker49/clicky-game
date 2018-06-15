import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <h1 className="nav-item">
          Clicky Game
        </h1>
        <div className="nav-item">Welcome to the clicky game</div>
        <h3 className="nav-item">
          Current Score: { this.props.score } | 
          High Score: { this.props.highScore } 
        </h3>
      </nav>
    )
  }
}

