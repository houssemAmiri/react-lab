import React, { useEffect } from 'react';

export default function Timer() {
  const [count, setCount] = React.useState(0);
  useEffect(() => {
    console.log('useEffect called');
    console.log('count', count);
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [count]);

  console.log('Timer rendered');
  return <div>Timer : {count}</div>;
}
