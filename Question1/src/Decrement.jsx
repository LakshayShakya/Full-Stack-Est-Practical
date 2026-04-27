/* eslint-disable no-unused-vars */
import React from "react";

function Decrement({ setCount }) {
  return (
    <button onClick={() => setCount(prev => prev - 1)}>
      Decrement
    </button>
  );
}

export default Decrement;