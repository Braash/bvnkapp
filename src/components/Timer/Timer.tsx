import React, { useState, useEffect } from 'react';

interface QuoteTimerProps {
  expiryDate: number;
}

const QuoteTimer: React.FC<QuoteTimerProps> = ({ expiryDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<number>(expiryDate - Date.now());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedTimeRemaining = expiryDate - Date.now();
      setTimeRemaining(updatedTimeRemaining);

      if (updatedTimeRemaining <= 0) {
        clearInterval(interval);
      }
    }, 1000); // Refresh every second

    return () => {
      clearInterval(interval);
    };
  }, [expiryDate]);

  const formatTime = (milliseconds: number): string => {
    const seconds = Math.floor((milliseconds / 1000) % 60);
    const minutes = Math.floor((milliseconds / 1000 / 60) % 60);
    const hours = Math.floor(milliseconds / 1000 / 3600);

    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div>
      <p>{formatTime(timeRemaining)}</p>
    </div>
  );
};

export default QuoteTimer;