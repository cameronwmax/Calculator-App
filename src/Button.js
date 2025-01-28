function Button({ label, type, onClick }) {
  return (
    <button
      className={`btn ${type === "equal" ? "btn-lg" : ""}`}
      onClick={() => onClick(label, type)}
    >
      {label}
    </button>
  );
}

export default Button;
