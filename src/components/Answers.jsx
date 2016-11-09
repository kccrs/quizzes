import React from 'react';

const Answers = (props) => {
  return (
    <div className="answers">
      <label htmlFor={props.id}>
        <input type="radio" name={props.id} value={props.score} />
        {props.text}
      </label>
    </div>
  );
};

export default Answers;
