import { useRef, useState } from "react";
import "./App.css";
import Button from "./Button";
import Buttons from "./components/Buttons";
import Calculator from "./components/Calculator";
import Error from "./components/Error";
import Screen from "./components/Screen";

const buttons = [
  { label: "C", type: "clear" },
  { label: "+-", type: "toggle-sign" },
  { label: "%", type: "percentage" },
  { label: "÷", type: "operator/divide" },
  { label: "7", type: "number" },
  { label: "8", type: "number" },
  { label: "9", type: "number" },
  { label: "x", type: "operator/multiply" },
  { label: "4", type: "number" },
  { label: "5", type: "number" },
  { label: "6", type: "number" },
  { label: "-", type: "operator/subtract" },
  { label: "1", type: "number" },
  { label: "2", type: "number" },
  { label: "3", type: "number" },
  { label: "+", type: "operator/add" },
  { label: "0", type: "number" },
  { label: ".", type: "decimal" },
  { label: "=", type: "equal" },
];

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

function App() {
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

  return (
    <Calculator>
      <Screen isError={isError} equation={equation} input={input} />
      <Buttons buttons={buttons} onClick={handleClick} />
    </Calculator>
  );
}

export default App;
