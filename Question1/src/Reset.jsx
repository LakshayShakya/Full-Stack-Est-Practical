/* eslint-disable no-unused-vars */
import React from "react";

function Reset({ setCount }) {
  return (
    <button onClick={() => setCount(0)}>
      Reset
    </button>
  );
}

export default Reset;