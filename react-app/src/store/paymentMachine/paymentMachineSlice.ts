import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Fsm } from "../../react-state-machine-library/fsm/fsm";
import { initialState } from "./initialState";
import { Machine } from "../../react-state-machine-library/fsm/types";

const paymentMachine = new Fsm(initialState);

const paymentMachineSlice = createSlice({
  name: "stateMachine",
  initialState: paymentMachine.getCurrent(),
  reducers: {
    transition: (state, action: PayloadAction<string>) => {
      // Handle state transitions using your state machine methods
      console.log("state ", state);
      try {
        paymentMachine.onEvent({ name: action.payload });
      } catch (e) {
        console.log("Error: ", e);
      }
      return (state = paymentMachine.getCurrent());
    },
  },
});

export const { transition } = paymentMachineSlice.actions;
export const selectStateMachine = (state: Machine) => state;

export default paymentMachineSlice.reducer;
