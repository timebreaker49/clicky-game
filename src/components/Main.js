import React, { Component } from 'react';
import flagsArray from '../Flag.json';
import Flag from './Flag';
import '../styles/Main.css';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      previousClick: false
    }
  }

  shuffle = array => {
    for (let a = array.length - 1; a > 0; a --) {
      const b = Math.floor(Math.random() * (a + 1));
      [array[a], array[b]] = [array[b], array[a]];
    }
  }

  clickHandler = id => {
    this.props.scoreKeeper(id);
    this.setState({
      previousClick: id
    });
    this.shuffle(flagsArray);
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
      </div>
    )
  }
}
