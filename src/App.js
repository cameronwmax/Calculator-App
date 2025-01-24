import { useRef, useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="calculator">
      <div className="screen">
        <div className="screen-filter"></div>
        SCREEN
      </div>

      <div className="buttons">
        <button className="btn">C</button>
        <button className="btn">+-</button>
        <button className="btn">%</button>
        <button className="btn">/</button>

        <button className="btn">7</button>
        <button className="btn">8</button>
        <button className="btn">9</button>
        <button className="btn">X</button>

        <button className="btn">4</button>
        <button className="btn">5</button>
        <button className="btn">6</button>
        <button className="btn">-</button>

        <button className="btn">1</button>
        <button className="btn">2</button>
        <button className="btn">3</button>
        <button className="btn">+</button>

        <button className="btn">0</button>
        <button className="btn">.</button>
        <button className="btn btn-lg">=</button>
      </div>
    </div>
  );
}

export default App;
