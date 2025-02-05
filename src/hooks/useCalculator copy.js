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

// Refactor idea:
//  state = {
//    val1: "",
//    operator: "",
//    val2: ""
//  }
// While user is inputing a number add it to val1
// Once user inputs a operator, update the operator, move focus to val2 if while user inputs numbers
// If user inputs another operator, calculate equation and update screen and repeat the process from val2
function useCalculator() {
  const [input, setInput] = useState(0);
  const [equation, setEquation] = useState("");
  // error message: Error
  const [isError, setIsError] = useState(false);

  function handleClick(label, type) {
    console.log(type);
    if (type === "clear") return handleClear();
    if (type === "equal") return handleEquation(equation);
    if (type.startsWith("operator") && /[+\-x÷]/.test(equation)) {
      if (/[+\-x÷]/.test(equation[equation.length - 1])) {
        setInput(label);
        setEquation((cur) => cur.substring(0, cur.length - 1) + label);
        return;
      }
      // Splitting like this makes us lose the operator
      // Need to find way to keep operator
      handleOperation(equation.split(/[+\-x÷]/));
    }

    setInput(label);
    // setEquation((cur) => (cur.length === 0 ? label : `${cur} ${label}`));
    console.log(label, type);
    setEquation((prev) => prev + label);
  }

  function handleClear() {
    if (isError) setIsError((cur) => !cur);
    setInput(0);
    setEquation("");
  }

  function handleOperation([val1, operator, val2]) {
    // Need way to split and keep operator
    // spaces in equations like '2 2 + 2' break code
    console.log(val1, operator, val2);
    calculateHelper(setEquation, val1, val2, operator);
  }

  function handleEquation(equation) {
    console.log(equation);
    // Check equation is valid for solving
    // Equation needs to be spit by operator
    // Calculate equation by operator
    // Update screen
  }

  return { input, equation, isError, handleClick, handleClear };
}

export default useCalculator;
