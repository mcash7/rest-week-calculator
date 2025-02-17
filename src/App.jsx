import { useState } from "react";

export default function RestWeekCalculator() {
  const [workoutDays, setWorkoutDays] = useState(7);
  const [result, setResult] = useState(null);

  const calculateRestWeek = () => {
    const days = parseFloat(workoutDays);
    if (isNaN(days) || days < 1 || days > 7) {
      setResult("Enter a number between 1 and 7.");
      return;
    }
    const weeks = ((9.5 - days) ** 2) / 2;
    setResult(`Take a rest week every ${weeks.toFixed(1)} weeks.`);
  };

  return (
<div style={{
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
  width: "100vw",  // Ensures full screen width
  textAlign: "center",
  fontFamily: "Arial, sans-serif"
}}>
      <h1>Rest Week Calculator</h1>
      <p>Enter how many days per week you work out:</p>
      <input
        type="number"
        min="1"
        max="7"
        value={workoutDays}
        onChange={(e) => setWorkoutDays(e.target.value)}
        style={{
          padding: "10px",
          fontSize: "16px",
          textAlign: "center",
          borderRadius: "5px",
          border: "1px solid #ccc",
        }}
      />
      <br />
      <button
        onClick={calculateRestWeek}
        style={{
          marginTop: "10px",
          padding: "10px 20px",
          fontSize: "16px",
          backgroundColor: "#007BFF",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        Calculate
      </button>
      {result && (
        <p style={{ marginTop: "20px", fontSize: "18px", fontWeight: "bold" }}>
          {result}
        </p>
      )}
    </div>
  );
}