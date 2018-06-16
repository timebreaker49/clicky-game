import React, { Component } from 'react';
import flagsArray from '../Flag.json';
import Flag from './Flag';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousClick: false
    }
  }



  clickHandler = id => {
    
    this.props.scoreKeeper(id);
    console.log("props id :" + id);
    // some sort of function to shuffle the array

    
  }

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
                key={ flag.id.toString() }

                clickHandler={this.clickHandler}
              /> 
            )}
          </div>
        { this.props.children }
      </div>
    )
  }
}
