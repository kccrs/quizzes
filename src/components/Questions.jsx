// import React, { Component } from 'react';
// import axios from 'axios';
// import Answers from './Answers';
//
// export default class Questions extends Component {
//   constructor() {
//     super();
//     this.state = {
//       questions: {}
//     };
//   }
//
//   componentDidMount() {
//     axios.get('/quizzes')
//       .then((response) => {
//         this.setState({
//           questions: response.data.quizzes[0].questions
//         });
//         console.log(this.state.questions);
//       })
//       .catch((error) => {
//         console.log(error);
//     });
//   }
//
//   render () {
//     return (
//       <ul className="quiz-questions">
//         {(this.state.questions).map((quiz) => {
//           return (
//             <section className="single-question" key={quiz.id}>
//               <h2 className="question-title">{quiz.title}</h2>
//               <Answers />
//             </section>
//           )
//         })}
//       </ul>
//
//     //     {(this.state.questions).map((quiz) => {
//     //       return (
//     //         <section className="single-question" key={quiz.id}>
//     //           <h2 className="question-title">{quiz.title}</h2>
//     //           <Answers />
//     //         </section>
//     //       )
//     //     }
//     //   </ul>
//     // )
//   // }
//     )
//   }
// }
