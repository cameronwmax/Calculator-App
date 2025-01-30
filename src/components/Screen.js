import { useCalculator } from "../context/useCalculator";

function Screen() {
  const { isError, equation, input } = useCalculator();

  return (
    <div className="screen">
      {!isError ? (
        <>
          <div className="screen-filter"></div>
          <span className="screen-equation">{equation}</span>
          <span className="screen-input">{input}</span>
        </>
      ) : (
        <Error />
      )}
    </div>
  );
}

export default Screen;
