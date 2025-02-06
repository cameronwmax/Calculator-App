import { useCalculator } from "../context/useCalculator";
import Error from "./Error";

function Screen() {
  const { isError, equation, input } = useCalculator();
  const { v1, operator, v2 } = equation;

  return (
    <div className="screen">
      {!isError ? (
        <>
          <div className="screen-filter"></div>
          <span className="screen-equation">{`${v1} ${operator} ${v2}`}</span>
          <span className="screen-input">{input}</span>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Screen;
