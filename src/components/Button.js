import { useCalculator } from "../context/useCalculator";

function Button({ label, type, onClick }) {
  const { handleClick } = useCalculator();

  return (
    <button
      className={`btn ${type === "equal" ? "btn-lg" : ""}`}
      onClick={() => handleClick(label, type)}
    >
      {label}
    </button>
  );
}

export default Button;
