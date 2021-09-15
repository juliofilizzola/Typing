import React from 'react';

const Word = ({word}) => {
  return (
    <div>
      <span className="matched"></span>
      <span className="remainder">{word}</span>
    </div>
  );
};

export default Word
