import { useState, useEffect } from 'react';

export const App = () => {

  const [num, setNum] = useState(0);

  return (
    <div>

      <h3> count: {num} </h3>

      <button onClick={() => setNum(num+1)} > 
        increament 
      </button>

    </div>
  )
};