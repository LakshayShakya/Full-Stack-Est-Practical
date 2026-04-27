/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import Increment from "./Increment";
import Decrement from "./Decrement";
import Reset from "./Reset";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Simple Counter App</h1>
      <h2>Count: {count}</h2>

      <Increment setCount={setCount} />
      <Decrement setCount={setCount} />
      <Reset setCount={setCount} />
    </div>
  );
}

export default App;