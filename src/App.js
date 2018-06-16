import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      score: 0,
      highScore: 0
    }
    
  }

  scoreHandler

  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
