import React from 'react';

const Answers = (props) => {
  return (
    <div className="answers">
      <label htmlFor={props.name}>
        <input type="radio" name={props.name} value={props.score} />
        {props.text}
      </label>
    </div>
  );
};

export default Answers;
