import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [sum, setSum] = useState(0);

  useEffect(() => {
    let active = true;

    const calculateSum = async () => {
      await new Promise((resolve) => setTimeout(resolve, 0));

      if (active) {
        const total = numbers.reduce((acc, num) => acc + num, 0);
        setSum(total);
      }
    };

    calculateSum();

    return () => {
      active = false;
    };
  }, [numbers]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    if (value === "") return;

    const parsed = parseInt(value, 10);
    if (!isNaN(parsed)) {
      setNumbers((prev) => [...prev, parsed]);
    }
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Sum Calculator</h1>

      <input
        type="number"
        value={inputValue}
        onChange={handleChange}
        aria-label="number-input"
        style={{ fontSize: "1.2rem", padding: "8px", width: "150px", textAlign: "center" }}
      />

      <p>Sum: {sum}</p>

      <p>Numbers Entered: {numbers.join(", ")}</p>
    </div>
  );
}

export default SumCalculator;
