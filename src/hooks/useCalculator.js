import { useState } from "react";

function calculateHelper(setter, val1, val2, operator) {
  const num1 = Number(val1);
  const num2 = Number(val2);

  const operations = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "x": (a, b) => a * b,
    "÷": (a, b) => (b !== 0 ? a / b : "Cannot divid by zero"),
  };

  setter(operations[operator](num1, num2));
}

function useCalculator() {
  const [input, setInput] = useState(0);
  const [equation, setEquation] = useState("");
  // error message: Error
  const [isError, setIsError] = useState(false);

  function handleClick(label, type) {
    if (type === "clear") return handleClear();
    if (type.startsWith("operator") && /[+\-x÷]/.test(equation)) {
      if (/[+\-x÷]/.test(equation[equation.length - 1])) {
        setInput(label);
        setEquation((cur) => cur.substring(0, cur.length - 1) + label);
        return;
      }
      handleOperation(equation.split(" "));
    }

    setInput(label);
    setEquation((cur) => (cur.length === 0 ? label : `${cur} ${label}`));
  }

  function handleClear() {
    if (isError) setIsError((cur) => !cur);
    setInput(0);
    setEquation("");
  }

  function handleOperation([val1, operator, val2]) {
    calculateHelper(setEquation, val1, val2, operator);
  }

  return { input, equation, isError, handleClick, handleClear };
}

export default useCalculator;
