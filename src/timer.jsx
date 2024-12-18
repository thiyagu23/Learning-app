import { react, useState, useEffect } from 'react';

const Timer = () => {
    const names = ["Mani", "Mani1", "Mani2", "Mani3", "Mani4",];
    const [couterIndex, setCounterIndex] = useState(0);

    // useEffect(() => {
    //     const render = setInterval(() => {
    //         setCounterIndex((preIndex) => (preIndex + 1) % names.length);
    //     }, 1000);

    //     return () => clearInterval(render);
    // }, []);

    useEffect(() => {
        // Set up side effects like API calls or timers
        const interval = setInterval(() => {
            console.log('Running every second');
        }, 1000);

        // Cleanup the side effects when the component is unmounted
        return () => {
            clearInterval(interval);
            console.log('Component unmounted and cleanup done');
        };
    }, []);


    return (
        <div>
            <p>Names {names[couterIndex]}</p>
        </div>
    );
};

export default Timer;