interface Event {
  name: string;

  // more properties should
  // be added in the future
}

interface State {
  transitions: {
    [name: string]: string;
  };
}

interface States {
  [name: string]: State;
}

interface Machine {
  states: States;
  initialState: string;
}

export type { States, Machine, State, Event };
