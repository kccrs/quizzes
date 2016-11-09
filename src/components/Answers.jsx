// import React, { Component } from 'react';
// import axios from 'axios';
//
// export default class Answers extends Component {
//   constructor() {
//     super();
//     this.state = {
//       answers: {}
//     };
//   }
//
//   componentDidMount() {
//     axios.get('/quizzes')
//       .then((response) => {
//         this.setState({
//           answers: response.data.quizzes[0].questions.answers
//         });
//         console.log(this.state.questions.answers);
//       })
//       .catch((error) => {
//         console.log(error);
//     });
//   }
//
//   render () {
//     return (
//
//       <ul className="quiz-answers">
//         {(this.state.answers).map((quiz) => {
//           return (
//             <section className="single-question" key={quiz.id}>
//               <h2 className="question-title">{quiz.title}</h2>
//               {quiz.questions.answers.map((answer, answerIndex) => {
//                 return (
//                   <li className="answer" key={answerIndex}>
//                     {answer.title}
//                   </li>
//                 )
//               })}
//             </section>
//           )
//         })}
//       </ul>
//     )
//   }
// }
