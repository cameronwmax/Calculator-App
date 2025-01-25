function Button({ label, type, handleClick }) {
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
