import React from 'react';

export default function Price({ oldPrice, newPrice }) {
  const oldStyles = {
    textDecorationLine: "line-through",
  };

  const newStyles = {
    fontWeight: "bold",
  };

  return (
    <div>
      <span style={oldStyles}>{oldPrice}</span>
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}
