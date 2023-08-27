import { useState } from "react";
import { Machine, Event } from "../fsm/types";
import { Fsm } from "../fsm/fsm";

/**
 * useMachine Hook
 */
const useMachine = (
  machine: Machine
): [fsm: Fsm, onEvent: (event: Event) => void] => {
  const [fsm, setFsm] = useState(new Fsm(machine));

  const onEvent = (event: Event): void => {
    const currentState = fsm.getCurrent();
    const newFsm = new Fsm({ ...machine, initialState: currentState }); // Create a new instance with the current state
    newFsm.onEvent(event); // Transition the new Fsm instance
    setFsm(newFsm); // Update the state with the new Fsm instance
  };

  return [fsm, onEvent];
};

export { useMachine };
