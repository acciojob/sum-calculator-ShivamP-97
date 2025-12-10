import React, { useState, useEffect } from "react";

function SumCalculator() {
  const [numbers, setNumbers] = useState([]);
  const [sum, setSum] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let active = true;

    const asyncSum = async () => {
      await new Promise((res) => setTimeout(res, 0)); // async non-blocking

      if (active) {
        const total = numbers.reduce((acc, n) => acc + n, 0);
        setSum(total);
      }
    };

    asyncSum();

    return () => {
      active = false;
    };
  }, [numbers]);

  const handleAddNumber = (e) => {
    e.preventDefault();

    const val = parseInt(inputValue, 10);

    if (!isNaN(val)) {
      setNumbers((prev) => [...prev, val]);
    }

    setInputValue("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sum Calculator</h2>

      <form onSubmit={handleAddNumber}>
        <input
          type="number"
          placeholder="Enter a number"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Add Number</button>
      </form>

      <h3>Numbers: {numbers.join(", ")}</h3>
      <h3>Total Sum: {sum}</h3>
    </div>
  );
}

export default SumCalculator;
