import React, { Component } from 'react';
import axios from 'axios';
import Question from './Question';

export default class Quizzes extends Component {
  constructor() {
    super();
    this.state = {

    };
  }

  componentDidMount() {
    axios.get('/quizzes')
      .then((response) => {
        this.setState({
          quizzes: response.data.quizzes
        });
      })
      .catch((error) => {
        console.log(error);
    });
  }

  render() {
    return (
      this.state.quizzes ?
      <div className="Quizzes">
        <h1>{this.state.quizzes[0].title}</h1>
        <section className="all-questions">
          { this.state.quizzes[0].questions.map(q =>
              <Question
                key={ Math.random() }
                question={ q.title }
                answers={ q.answers }
                name={ q.id }
              /> )}
        </section>
      </div>
     :
      <h3>There are no quizzes</h3>
  );
 }
 }
