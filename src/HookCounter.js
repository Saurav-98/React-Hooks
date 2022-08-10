import React from 'react';

const HookCounter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <h1>This is State Counter</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count {count}
      </button>
    </div>
  );
};

export default HookCounter;
