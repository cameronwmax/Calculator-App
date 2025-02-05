import { useEffect, useState } from "react";

const initialState = {
  v1: "",
  operator: "",
  v2: "",
};

function calculateHelper({ v1, operator, v2 }, setter) {
  const num1 = Number(v1);
  const num2 = Number(v2);

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "÷": (a, b) => (b !== 0 ? a / b : "Cannot divide by zero"),
  };

  const result = operations[operator](num1, num2);
  setter({ "v1": String(result), operator: "", "v2": "" });
}

function useCalculator() {
  const [equation, setEquation] = useState(initialState);
  const [equationPos, setEquationPos] = useState("v1");
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  function handleClick(label, type) {
    console.log(label, type);
    if (type === "clear") return handleClear();
    if (type.startsWith("operator")) return handleOperator(label);

    setInput(label);
    setEquation((prev) => ({ ...prev, [equationPos]: prev[equationPos] + label }));
  }

  function handleClear() {
    setEquation(initialState);
    setEquationPos("v1");
    setInput("");
    setIsError(false);
  }

  function handleOperator(label) {
    // Check if equation is ready to be calculated
    if (equationPos === "v2") calculateHelper(equation, setEquation);
    setEquation((prev) => ({ ...prev, operator: label }));
    setInput(label);
    setEquationPos("v2");
  }

  function handleEquation(equation) {
    console.log(equation);
    // Check equation is valid for solving
    // Equation needs to be spit by operator
    // Calculate equation by operator
    // Update screen
  }

  useEffect(() => {
    console.log(equation);
  }, [equation]);

  return { input, equation, isError, handleClick, handleClear };
}

export default useCalculator;
