import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fsm } from "../../react-state-machine-library/fsm/fsm";
import { initialState } from "./machineState";
import { Machine } from "../../react-state-machine-library/fsm/types";

const paymentMachine = new Fsm(initialState);

interface paymentMachineState {
  status: string;
  isFinal: boolean;
}
const initialMachineState: paymentMachineState = {
  status: paymentMachine.getCurrent(),
  isFinal: paymentMachine.inFinalState(),
};

/*
 * Create a Redux slice for managing the payment machine state
 * Assumption: this peace of data needs to be accessed by multiple components
 * in the future  - this is why we handle this state in the store.
 * The state contain the necessary data for the compoennts
 * (and not the FSM instance itself which might contain more data and function).
 */
const paymentMachineSlice = createSlice({
  name: "stateMachine",
  initialState: initialMachineState,
  reducers: {
    transition: (state: paymentMachineState, action: PayloadAction<string>) => {
      // Handle state transitions using your state machine methods
      console.log("state ", state);
      try {
        paymentMachine.onEvent({ name: action.payload });
        const newState: paymentMachineState = {
          status: paymentMachine.getCurrent(),
          isFinal: paymentMachine.inFinalState(),
        };
        return (state = newState);
      } catch (e) {
        console.log("Error: ", e);
      }
      return state;
    },
  },
});

export const { transition } = paymentMachineSlice.actions;
export const selectStateMachine = (state: Machine) => state;

export default paymentMachineSlice.reducer;
