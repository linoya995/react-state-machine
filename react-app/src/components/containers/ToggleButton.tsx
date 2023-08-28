import { useMachine } from "../../react-state-machine-library/hooks/useMachine";
import Button from "../presentational/Button";

// Inital state of toggle machine
const toggleMachine = {
  initialState: "inactive",
  states: {
    inactive: {
      transitions: { TOGGLE: "active" },
    },
    active: {
      transitions: { TOGGLE: "inactive" },
    },
  },
};

/**
 * Demonstrates the use case of react-state-machine-library
 * with useMachine hook.
 */
const ToggleButton = () => {
  const [fsm, onEvent] = useMachine(toggleMachine);
  const active = fsm.is("active");

  return (
    <div className="ticket">
      <h1>Toggle button</h1>
      <p>This is an example of useMachine hook</p>
      <Button
        onClick={() => onEvent({ name: "TOGGLE" })}
        title={`Click me ${active ? "✅" : "❌"}`}
      />
    </div>
  );
};

export default ToggleButton;
