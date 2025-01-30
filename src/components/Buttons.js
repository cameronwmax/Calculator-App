import { buttons } from "../constants/buttons";
import Button from "./Button";

function Buttons() {
  return (
    <div className="buttons">
      {buttons.map((button) => (
        <Button label={button.label} type={button.type} key={button.label} />
      ))}
    </div>
  );
}

export default Buttons;
