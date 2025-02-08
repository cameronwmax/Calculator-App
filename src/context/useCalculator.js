import { createContext, useContext } from "react";
import useCalc from "../hooks/useCalculator";

const CalculatorContext = createContext();

function CalculatorProvider({ children }) {
  const { input, equation, isError, handleClick } = useCalc();

  return (
    <CalculatorContext.Provider value={{ input, equation, isError, handleClick }}>
      {children}
    </CalculatorContext.Provider>
  );
}

function useCalculator() {
  const context = useContext(CalculatorContext);
  if (context === undefined) throw new Error("Used out of provider");
  return context;
}

export { CalculatorProvider, useCalculator };
