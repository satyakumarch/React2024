import React, { useState, useEffect } from "react";

const CountdownTimer = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    // If timeLeft reaches 0, stop the countdown
    if (timeLeft <= 0) return;

    // Set an interval to update the time every second
    const timerInterval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // Cleanup the interval when the component unmounts or timeLeft changes
    return () => clearInterval(timerInterval);
  }, [timeLeft]);

  return (
    <div style={styles.timerContainer}>
      <h2>Countdown Timer</h2>
      <div style={styles.timeDisplay}>
        {timeLeft > 0 ? timeLeft : "Time's up!"}
      </div>
    </div>
  );
};

// Optional: Add some simple styles to make the timer look nice
const styles = {
  timerContainer: {
    textAlign: "center",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
    backgroundColor: "#f0f0f0",
    borderRadius: "8px",
    width: "200px",
    margin: "50px auto",
  },
  timeDisplay: {
    fontSize: "48px",
    fontWeight: "bold",
    marginTop: "20px",
    color: "#ff4500",
  },
};

export default CountdownTimer;
