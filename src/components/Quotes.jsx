import React from 'react';

const Quotes = (props) => {
  return (
    <div className="quotes">
      <h2>"{props.quote}"</h2>
      <span>-{props.author}</span>
    </div>
  );
};

export default Quotes;
