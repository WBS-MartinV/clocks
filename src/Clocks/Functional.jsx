import { useEffect, useState } from "react";

export default ({ id, remove }) => {
    const [time, setTime] = useState(new Date());
    const [timer, setTimer] = useState();

    const startClock = () =>
        setTimer(setInterval(() => setTime(new Date(), 1000)));

    const stopClock = () => {
        clearInterval(timer);
        setTimer(null);
    };

    const toggleClock = () => {
        if (timer) {
            stopClock();
        } else {
            startClock();
        }
    };

    useEffect(() => {
        startClock();

        return stopClock;
    }, []);

    return (
        <div>
            <h1>A Functional Clock! ({id})</h1>
            <h2>{time.toLocaleTimeString()}</h2>

            <button className="toggle" onClick={toggleClock}>
                {timer ? "Stop" : "Start"}
            </button>
            <button className="remove" onClick={remove}>
                Remove me!
            </button>
        </div>
    );
};
