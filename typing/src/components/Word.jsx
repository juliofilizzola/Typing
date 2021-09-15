import React from 'react';
  const Word = ({word, validKeys}) => {
  return (
    <div>
      <span className="matched"></span>
      <span className="remainder">{word}</span>
    </div>
  );
};

export default Word
