import { useState, useEffect } from 'react';

/**
 * useCountdown Hook
 * @param {string} targetDate - The target date string (e.g., 'Feb 20, 2027 08:00:00')
 * @returns {object} { days, hours, minutes, seconds }
 */
export default function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const destination = new Date(targetDate).getTime();

    const updateCountdown = () => {
      const now = Date.now();
      const difference = destination - now;

      if (difference < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / 86400000),
        hours: Math.floor((difference % 86400000) / 3600000),
        minutes: Math.floor((difference % 3600000) / 60000),
        seconds: Math.floor((difference % 60000) / 1000),
      });
    };

    updateCountdown(); // Run immediately
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return timeLeft;
}
