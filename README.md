# react-state-machine
**Welcome to this project ! 😃**

react-state-machine-library is a JavaScript library that implements Finite State Machines (FSMs) for React.js applications.

## Introduction
**what is A Finite State Machine (FSM) ?**	

It is a computational model that represents the behavior of a system using a 
finite number of states, transitions between those states, and actions associated with those transitions. 
This project demonstrates the use of a finite state machine (FSMs) using react-state-machine-library.


### Usage
**lets explore the use examples in the project**

**Here is basic exmple of using FSM:**

Define states and transitions of a toggle button:
```jsx
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
```
### Using React Hook 
```jsx
import { useMachine } from "react-state-machine-library"
const [fsm, onEvent] = useMachine(toggleMachine);
onEvent({ name: "TOGGLE" })
console.log(fsm.getCurrent());   // The new state is "inactive"
```

### Using the library directly 
```jsx
import { Fsm } from "react-state-machine-library"
const fsm = new Fsm(toggleMachine);
fsm.onEvent({ name: "TOGGLE" });
console.log(fsm.getCurrent());   // The new state is "inactive"
```

**Visual representation of toggle machine:**

![Alt text](https://i.ibb.co/64skrnX/4.png)

**Lets dive into the second example:**

Define states and transitions of a payment machine:
```jsx
const paymentMachine = {
  initialState: "idle",
  states: {
    idle: {
      transitions: {
        FETCH: "loading",
      },
    },
    loading: {
      transitions: {
        RESOLVE: "success",
        REJECT: "failure",
      },
    },
    success: {
      transitions: {},           //"sucess" is final state.
    },
    failure: {
      transitions: {
        RETRY: "loading",
      },
    },
  },
  },
};
```
Create state machine and trigger events:
```jsx
import { Fsm } from "react-state-machine-library"
const fsm = new Fsm(paymentMachine);
fsm.onEvent({ name: "FETCH" });
console.log(fsm.getCurrent());     // "loading"
fsm.onEvent({ name: "FETCH" });    // error! there is no transition from "loading" to "idle"
fsm.onEvent({ name: "RESOLVE" });  // The new state is "success"
fsm.onEvent({ name: "FETCH" });    // error! no transitions from "success" state.
```

**Visual representation of payment machine:**

![Alt text](https://i.ibb.co/nmH09bZ/3.png)

