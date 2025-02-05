import { useCalculator } from "../context/useCalculator";

function Screen() {
  const { isError, equation, input } = useCalculator();
  const { v1, operator, v2 } = equation;

  return (
    <div className="screen">
      {!isError ? (
        <>
          <div className="screen-filter"></div>
          {/* {!v1 || !v2 ? (
            <span className="screen-equation"></span>
          ) : ( */}
          <span className="screen-equation">{`${v1} ${operator} ${v2}`}</span>
          {/* )} */}
          <span className="screen-input">{input}</span>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Screen;
