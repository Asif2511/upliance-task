import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

const Counter = () => {
  const [count, setCount] = useState(0);
  const props = useSpring({ backgroundColor: `rgba(0, 0, 255, ${count / 100})` });

  return (
    <animated.div
      style={props}
      className="max-w-md mx-auto p-6 mt-10 bg-gray-100 shadow-lg rounded-lg text-center"
    >
      <h1 className="text-4xl font-bold text-gray-800">{count}</h1>
      <div className="mt-6 flex justify-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
        >
          Increment
        </button>
        <button
          disabled={count === 0}
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
        >
          Decrement
        </button>
        <button
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition duration-300"
        >
          Reset
        </button>
      </div>
    </animated.div>
  );
};

export default Counter;
