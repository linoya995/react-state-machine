# react-state-machine
Welcome to the react-state-machine project!

## Introduction
A Finite State Machine (FSM) is a computational model that represents the behavior of a system using a 
finite number of states, transitions between those states, and actions associated with those transitions. 
This project demonstrates the implementation of a finite state machine (FSMs) using react-state-machine-library.
react-state-machine-library is a JavaScript library for React.js applications.

### Usage
Define states and transitions of a toggle button:

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

** Using React Hook **:
import { useMachine } from "react-state-machine-library"
const [fsm, onEvent] = useMachine(toggleMachine);
onEvent({ name: "TOGGLE" })
console.log(fsm.getCurrent());   // The new state is "inactive"
  
** Or using the library directly **:
import { Fsm } from "react-state-machine-library"
const fsm = new Fsm(initialState);
fsm.onEvent({ name: "TOGGLE" });
console.log(fsm.getCurrent());   // The new state is "inactive"
