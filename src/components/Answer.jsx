import React from 'react';

const Answer = (props) => {
  return (
    <div className="answers">
      <label htmlFor={props.id}>
        <input type="radio" name={props.id} value={props.score} />
        {props.text}
      </label>
    </div>
  );
};

export default Answer;
