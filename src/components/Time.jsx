import React, { useState, useEffect } from 'react';
import moment from 'moment';

const Timer = () => {
  const [time, setTime] = useState(moment().format('HH:mm:ss'));

  useEffect(() => {
    const intervalID = setInterval(() => tick(), 1000);
    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const tick = () => {
    setTime(moment().format('HH:mm:ss'));
  };

  return (
    <div className="date-time">
      <h3 className="text-8xl">{time}</h3>
      <div class="border"></div>
      <h3 className="text-2xl">{moment().format('MMMM DD, YYYY')}</h3>
    </div>
  );
};

export default Timer;
