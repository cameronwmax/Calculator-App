import { useState } from "react";

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
    "÷": (a, b) => (b !== 0 ? a / b : null),
    "%": (a, b) => (a / 100) * b,
  };

  const result = operations[operator](num1, num2);
  setter({ "v1": String(result), operator: "", "v2": "" });
  return result;
}

function useCalculator() {
  const [equation, setEquation] = useState(initialState);
  const [equationPos, setEquationPos] = useState("v1");
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);

  function handleClick(label, type) {
    if (type === "clear") return handleClear();
    if (type === "equal") return handleEquation();
    if (type === "percentage") return handlePercentage();
    if (type === "toggle-sign") return handleToggleSign();
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
    if (!equation.v1) return;
    if (equationPos === "v2") calculateHelper(equation, setEquation);
    setEquation((prev) => ({ ...prev, operator: label }));
    setInput(label);
    setEquationPos("v2");
  }

  function handleEquation() {
    if (!equation.v1 || !equation.v2) return;
    setEquationPos("v1");
    const result = calculateHelper(equation, setEquation);
    if (result === null) return setIsError(true);
    if (result > 999999) return setIsError(true);
    setInput(result);
  }

  function handlePercentage() {
    if (!equationPos === "v1") return;
    setEquation((prev) => ({ ...prev, operator: "%" }));
    setEquationPos("v2");
  }

  function handleToggleSign() {
    if (!equation[equationPos]) return;
    const newValue = -equation[equationPos];
    setEquation((prev) => ({ ...prev, [equationPos]: newValue }));
    setInput(newValue);
  }

  return { input, equation, isError, handleClick, handleClear };
}

export default useCalculator;
