/* eslint-disable no-unused-vars */

import React from "react";

function Increment({ setCount }) {
  return (
    <button onClick={() => setCount(prev => prev + 1)}>
      Increment
    </button>
  );
}

export default Increment;