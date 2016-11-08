import React, { Component } from 'react';
// import './App.css';
import Quizzes from './Quizzes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h2>What JavaScript Error Are You?</h2>
        <Quizzes />
      </div>
    );
  }
}

export default App;
