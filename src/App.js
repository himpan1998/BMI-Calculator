import React, { useState, useMemo } from "react";
import "./App.css";

const App = () => {
  const [weight, setWeight] = useState(55);
  const [height, setHeight] = useState(180);

  function onWeightChange(e) {
    setWeight(e.target.value);
  }

  function onHeightChange(e) {
    setHeight(e.target.value);
  }

  const bmiOutput = useMemo(() => {
    const calculateHeight = height / 100;
    return (weight / (calculateHeight * calculateHeight)).toFixed(1);
  }, [weight, height]);

  function getBMICategory(bmiOutput) {
    if (bmiOutput < 18.5) return "Underweight";
    if (bmiOutput < 24.9) return "Normal weight";
    if (bmiOutput < 29.9) return "Overweight";
    return "Obesity";
  }

  const getCategoryClass = (bmi) => {
    if (bmi < 18.5) return "underweight";
    if (bmi < 24.9) return "normal-weight";
    if (bmi < 29.9) return "overweight";
    return "obesity";
  };
  return (
    <main>
      <h1>BMI Calculator</h1>
      <div className="input-section">
        <p className="slider-output">Weight: {weight} kg</p>
        <input
          className="input-slider"
          type="range"
          step="1"
          min="40"
          max="200"
          onChange={onWeightChange}
        />
        <p className="slider-output">Height: {height} cm</p>
        <input
          className="input-slider"
          type="range"
          min="140"
          max="220"
          onChange={onHeightChange}
        />
        <div className={`output-section ${getCategoryClass(bmiOutput)}`}>
          <p>Your BMI is</p>
          <p className="output">{bmiOutput}</p>
          <div className="category">
            <p>Category:{getBMICategory(bmiOutput)}</p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default App;
