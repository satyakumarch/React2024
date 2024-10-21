import React, { useState } from 'react';



const StatefulComponent = () => {
    const [count, setCount] = useState(0);
    
    return (
        <div>
            <h1>Stateful</h1>
            <p>Current count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default StatefulComponent;
