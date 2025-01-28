import "./App.css";
import Buttons from "./components/Buttons";
import Calculator from "./components/Calculator";
import Screen from "./components/Screen";
import useCalculator from "./hooks/useCalculator";

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
  const { input, equation, isError, handleClick, handleClear } = useCalculator();

  return (
    <Calculator>
      <Screen isError={isError} equation={equation} input={input} />
      <Buttons buttons={buttons} onClick={handleClick} />
    </Calculator>
  );
}

export default App;
