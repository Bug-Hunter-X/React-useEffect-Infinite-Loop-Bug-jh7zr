```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This effect will run after every render, including the initial render
    console.log('Effect ran with count:', count);
    return () => {
      // Cleanup function (optional)
      console.log('Cleanup function ran');
    };
  }, [count]); // Add count to the dependency array

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default MyComponent;
```