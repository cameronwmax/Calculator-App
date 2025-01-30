import "./App.css";
import Buttons from "./components/Buttons";
import Calculator from "./components/Calculator";
import Screen from "./components/Screen";

function App() {
  return (
    <Calculator>
      <Screen />
      <Buttons />
    </Calculator>
  );
}

export default App;
