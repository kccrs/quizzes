import React, { Component } from 'react';
import axios from 'axios';

export default class Quizzes extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
      questions: []
    };
  }

  componentDidMount() {
    axios.get('/quizzes')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="Quizzes">
        <h3>working</h3>
      </div>
    );
  }
}
