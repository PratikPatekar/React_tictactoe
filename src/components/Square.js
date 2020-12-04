import React from 'react';

const Square = ({ value, onClick, iswinningSquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${iswinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      style={{ fontWeight: iswinningSquare ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
