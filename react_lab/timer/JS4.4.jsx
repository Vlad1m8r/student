import React, { useState, useEffect } from 'react';
import './Timer.css';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="timer">
      <span className="pulse">{seconds}</span> Таймер
    </div>
  );
}

export default Timer;



class MyComponent extends Component {
    render() {
      return <div>Классовый!</div>;
    }
  }

