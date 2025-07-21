import React, { useMemo } from 'react';

function ExpensiveComponent({ input1, input2 }) {
  const result = useMemo(() => {
    // Simulate an expensive calculation
    return performCalculation(input1, input2);
  }, [input1, input2]);

  return <div>Result: {result}</div>;
}

function performCalculation(a, b) {
  // Heavy computation (placeholder logic)
  console.log("Calculating...");
  console.log({a,b});
  
  let sum = 0;
  for (let i = 0; i < 100; i++) {
    sum += a + b;
  }
  return sum;
}
export default ExpensiveComponent;
