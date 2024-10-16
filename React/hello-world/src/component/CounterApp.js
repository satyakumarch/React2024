import React, { useState } from 'react';
import './CounterApp.css';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div class="CounterApp">
            <h1 className='count'>Counter: {count}</h1>
            <button onClick={increment} className='style1'>Increment</button>
            <button onClick={decrement} className='style2'>Decrement</button>
        </div>
    );
};

export default CounterApp;