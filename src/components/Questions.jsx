import React from 'react';
import Answers from './Answers';

const Questions = (props) => {

  return (
    <section className="questions">
      <h2 className="quiz-question">
        { props.question }
      </h2>
      { props.answers.map( a =>
        <Answers
          key={ Math.random() }
          name={ props.name }
          text={ a.title }
          value={ a.score }
        />
      )}
    </section>
  );
};

export default Questions;
