"use cliet";

import { useEffect, useState } from "react";

type CountdownProps = {
  expiresAt: string;
};

export function Countdown({ expiresAt }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const expiry = new Date(expiresAt).getTime();
      const difference = expiry - now;

      if (difference <= 0) {
        return "Expired";
      }

      const minutes = Math.floor(difference / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return `${minutes}:${seconds.toString().padStart(2, "0")}`;
    };

    //Calculate immediately
    setTimeLeft(calculateTimeLeft());

    //Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    //Cleanup
    return () => clearInterval(timer);
  }, [expiresAt]);

  return (
    <div className="text-sm font-mono text-yellow-400 bg-gray-900/50 rounded px-3 py-2 text-center">
      ⏰ Ends in: {timeLeft || "Calculating..."}
    </div>
  );
}
