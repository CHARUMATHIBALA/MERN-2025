import React, { useState } from 'react';

const Counter = () => {
  const [count, Number] = useState(0);
  

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => Number(count + 1)}>Increment</button>
     <button onClick={() => Number(count -1)}>Decrement</button>
    </div>
  );
};

export default Counter;
