import Button from "../Button";

function Buttons({ buttons, onClick }) {
  return (
    <div className="buttons">
      {buttons.map((button) => (
        <Button label={button.label} type={button.type} onClick={onClick} key={button.label} />
      ))}
    </div>
  );
}

export default Buttons;
