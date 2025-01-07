import React, { useEffect, useState } from "react";

const Timer = () => {
    const [flag, setFlag] = useState(false); 
    const [count, setCount] = useState(0);  

    useEffect(() => {
        if (flag) {
            const id = setInterval(() => {
                setCount((prevCount) => prevCount - 1);
            }, 1000);

            return () => clearInterval(id);
        }
    }, [flag]); 

    return (
        <div>
            <h1>Timer: {count}s</h1>
            <button onClick={() => setFlag(true)}>Start</button>
            <button onClick={() => setFlag(false)}>Pause</button>
            <button onClick={() => { setFlag(false); setCount(0); }}>Reset</button>
        </div>
    );
};

export default Timer;
