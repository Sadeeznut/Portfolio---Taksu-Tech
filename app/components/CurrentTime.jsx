import React, { useEffect, useState } from 'react';

const CurrentTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      const date = new Date();
      const options = {
        hour: 'numeric',
        minute: 'numeric',
        hour12: true
      };
      const timeString = date.toLocaleTimeString(undefined, options);
      setCurrentTime(timeString);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h1 className="text-4xl md:text-xl lg:text-4xl font-bold mb-2">{currentTime}</h1>
    </div>
  );
};

export default CurrentTime;
