import { useState } from "react";
import "./App.css";

export const replaceCamelCase = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, " $1");
};

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const newButtonColor = buttonColor === "red" ? "blue" : "red";
  const [disabled, setDisabled] = useState(false);

  const checkboxHandler = () => {
    setDisabled(!disabled);
    if (!disabled) {
      setButtonColor("gray");
    } else {
      setButtonColor(newButtonColor);
    }
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        onClick={() => setButtonColor(newButtonColor)}
        disabled={disabled}
      >
        Change to {newButtonColor}
      </button>
      <input
        type="checkbox"
        onClick={checkboxHandler}
        id="disable-button-checkbox"
      />
      <label htmlFor="disable-button-checkbox">Disable Button</label>
    </div>
  );
}

export default App;
