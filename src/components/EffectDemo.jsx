import { useState, useEffect } from 'react';

function EffectDemo() {
    const [count, setCount] = useState(0);

    // Add useEffect here

    useEffect(() => {
        console.log("Count changed:", count);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>

            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

export default EffectDemo;