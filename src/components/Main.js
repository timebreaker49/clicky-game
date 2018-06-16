import React, { Component } from 'react';
import flagsArray from '../Flag.json';
import Flag from './Flag';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
          <div className="Jumbotron">
            <p>
              Click on the flags, but only once! 
            </p>
          </div>
          <div className="container-fluid flags-area">
            {flagsArray.map( flag => 
              <Flag
                id={ flag.id}
                src={ flag.src}
                alt={ flag.name}
                key = { flag.id.toString() }

                // onClick = {this.onClick}
              /> 
            )}
          </div>
        { this.props.children }
      </div>
    )
  }
}
