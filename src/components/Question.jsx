import React from 'react';
import Answer from './Answer';

const Questions = (props) => {

  return (
    <section className="questions">
      <h2 className="quiz-question">
        { props.question }
      </h2>
      { props.answers.map( a =>
        <Answer
          key={ Math.random() }
          text={ a.title }
          value={ a.score }
        />
      )}
    </section>
  );
};

export default Questions;
