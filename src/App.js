import { useRef, useState } from "react";
import "./App.css";
import Button from "./Button";

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

function App() {
  const [input, setInput] = useState(0);
  const [equation, setEquation] = useState("");
  // error message: Error
  const [isError, setIsError] = useState(false);

  function handleClick(label, type) {
    if (type === "clear") return handleClear();
    if (type.startsWith("operator") && /[+\-x÷]/.test(equation))
      return handleOperation(type.split("/")[1]);

    setInput(label);
    setEquation((cur) => cur + label);
  }

  function handleClear() {
    setInput(0);
    setEquation("");
  }

  function handleOperation(operation) {
    console.log(operation);
  }

  return (
    <div className="calculator">
      <div className="screen">
        {!isError ? (
          <>
            <div className="screen-filter"></div>
            <span className="screen-equation">{equation}</span>
            <span className="screen-input">{input}</span>
          </>
        ) : null}
      </div>

      <div className="buttons">
        {buttons.map((button) => (
          <Button
            label={button.label}
            type={button.type}
            handleClick={handleClick}
            key={button.label}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
