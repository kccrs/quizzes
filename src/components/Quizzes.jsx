import React, { Component } from 'react';
import axios from 'axios';
// import Questions from './Questions';

export default class Quizzes extends Component {
  constructor() {
    super();
    this.state = {
      quizzes: [],
    };
  }

  componentDidMount() {
    axios.get('/quizzes')
      .then((response) => {
        this.setState({
          quizzes: response.data.quizzes[0]
        });
        console.log(this.state.quizzes);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return(
     <ul>
     <h1>{this.state.quizzes.title}</h1>
     {this.state.quizzes.questions ? this.state.quizzes.questions.map((quiz) => {
       return (
         <section id="quiz" key={quiz.id}>
           <h2 id="quiz-question">{quiz.title}</h2>
           {quiz.answers.map((answer, answerIndex) => {
             return (
               <li id="answer" key={answerIndex}>
                 {answer.title}
               </li>
             )
           })}
         </section>
       )
     }) : <h3>There are no quizzes.</h3>
   }

     </ul>
   )
 }
 }
