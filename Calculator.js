
// 6. Create a React component that features an embedded calculator for basic arithmetic operations 
// (addition, subtraction, multiplication, and division) with real-time result display and handling events.

import React, { useState } from "react";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    if (isNaN(number1) || isNaN(number2)) {
      setResult("Invalid input. Please enter valid numbers.");
      return;
    }

    let calcResult;
    switch (operation) {
      case "+":
        calcResult = number1 + number2;
        break;
      case "-":
        calcResult = number1 - number2;
        break;
      case "*":
        calcResult = number1 * number2;
        break;
      case "/":
        calcResult = number2 !== 0 ? number1 / number2 : "Cannot divide by zero";
        break;
      default:
        calcResult = "Please select an operation.";
    }

    setResult(calcResult);
  };

  return (
    <div className="calculator">
      <h1>React Calculator</h1>
      <div className="input-group">
        <input
          type="number"
          placeholder="Enter first number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <select onChange={(e) => setOperation(e.target.value)}>
          <option value="">Select Operation</option>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          placeholder="Enter second number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>
      <button onClick={handleCalculate}>Calculate</button>
      <div className="result">
        <h2>Result: {result}</h2>
      </div>
    </div>
  );
};


export default Calculator;
