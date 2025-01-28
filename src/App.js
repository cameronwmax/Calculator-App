import "./App.css";
import Buttons from "./components/Buttons";
import Calculator from "./components/Calculator";
import Screen from "./components/Screen";
import { buttons } from "./constants/buttons";
import useCalculator from "./hooks/useCalculator";

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
