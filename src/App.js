import React, { useState, useEffect } from 'react';
import './App.css';

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    const handleStart = () => setIsActive(true);
    const handleStop = () => setIsActive(false);
    const handleReset = () => {
        setSeconds(0);
        setIsActive(false);
    };

    return (
        <div className="timer-container">
            <div className="timer-display">Timer: {seconds}s</div>
            <div className="timer-buttons">
                <button className="timer-button start" onClick={handleStart}>Start</button>
                <button className="timer-button stop" onClick={handleStop}>Stop</button>
                <button className="timer-button reset" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}

export default Timer;
