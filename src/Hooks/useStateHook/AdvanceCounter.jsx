import React, { useState } from 'react';

const AdvanceCounter = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <h2>This is Advance Counter</h2>

      <h1>Count {value}</h1>

      <button onClick={() => setValue(value - 1)}>Decrement</button>
      <button onClick={() => setValue(0)}>Reset</button>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
};

export default AdvanceCounter;
