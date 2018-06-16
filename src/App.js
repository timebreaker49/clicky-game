import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      score: 0,
      highScore: 0,
      isClicked: []
    };
    
  }

  scoreKeeper = id => {
    if (this.state.isClicked.includes(id)) {
      this.setState({
        score: 0,
        isClicked: []
      });
      alert("Oops! Better luck next time!!");
    } else {
      this.setState(
        { isClicked: [...this.state.isClicked, id] });
      const newScore = this.state.score + 1;
      
      this.setState({
        score: newScore
      });
      if (newScore > this.state.highScore){
        this.setState({highScore: newScore})
      }
      if (newScore === 12) {
        alert("Congrats on winning the game!!");
        this.setState({
          score: 0,
          isClicked: []
        });
      }
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar 
        score = {this.state.score}
        highScore = {this.state.highScore}
        />
        <Main 
        scoreKeeper = {this.scoreKeeper}
        />
      </div>
    );
  }
}

export default App;
